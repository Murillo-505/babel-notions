-- CreateTable
CREATE TABLE "Shelf" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "libraryId" INTEGER NOT NULL,

    CONSTRAINT "Shelf_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Shelf_libraryId_idx" ON "Shelf"("libraryId");

-- AddForeignKey
ALTER TABLE "Shelf" ADD CONSTRAINT "Shelf_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "Library"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Create default shelf per library that already has volumes
INSERT INTO "Shelf" ("name", "description", "libraryId", "updatedAt")
SELECT 'Geral', 'Prateleira padrão', "libraryId", CURRENT_TIMESTAMP
FROM "Volume"
GROUP BY "libraryId";

-- Add shelfId, migrate data, remove libraryId
ALTER TABLE "Volume" ADD COLUMN "shelfId" INTEGER;

UPDATE "Volume" AS v
SET "shelfId" = s."id"
FROM "Shelf" AS s
WHERE s."libraryId" = v."libraryId";

ALTER TABLE "Volume" ALTER COLUMN "shelfId" SET NOT NULL;

ALTER TABLE "Volume" DROP CONSTRAINT "Volume_libraryId_fkey";
ALTER TABLE "Volume" DROP COLUMN "libraryId";

ALTER TABLE "Volume" ADD CONSTRAINT "Volume_shelfId_fkey" FOREIGN KEY ("shelfId") REFERENCES "Shelf"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateIndex
CREATE INDEX "Volume_shelfId_idx" ON "Volume"("shelfId");
