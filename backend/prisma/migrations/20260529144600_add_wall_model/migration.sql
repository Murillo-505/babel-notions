-- AlterTable
ALTER TABLE "Library" ADD COLUMN     "wallId" INTEGER;

-- CreateTable
CREATE TABLE "Wall" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Wall_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Library" ADD CONSTRAINT "Library_wallId_fkey" FOREIGN KEY ("wallId") REFERENCES "Wall"("id") ON DELETE SET NULL ON UPDATE CASCADE;
