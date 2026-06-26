-- CreateTable
CREATE TABLE "Shelf" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "libraryId" INTEGER NOT NULL,
    CONSTRAINT "Shelf_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "Library" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE INDEX "Shelf_libraryId_idx" ON "Shelf"("libraryId");

INSERT INTO "Shelf" ("name", "description", "libraryId", "updatedAt")
SELECT 'Geral', 'Prateleira padrão', "libraryId", CURRENT_TIMESTAMP
FROM "Volume"
GROUP BY "libraryId";

PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;

CREATE TABLE "new_Volume" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL DEFAULT '',
    "shelfId" INTEGER NOT NULL,
    CONSTRAINT "Volume_shelfId_fkey" FOREIGN KEY ("shelfId") REFERENCES "Shelf" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

INSERT INTO "new_Volume" ("id", "title", "content", "shelfId")
SELECT
    v."id",
    v."title",
    v."content",
    s."id"
FROM "Volume" v
INNER JOIN "Shelf" s ON s."libraryId" = v."libraryId";

DROP TABLE "Volume";
ALTER TABLE "new_Volume" RENAME TO "Volume";

CREATE INDEX "Volume_shelfId_idx" ON "Volume"("shelfId");

PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
