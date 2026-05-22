/*
  Warnings:

  - You are about to drop the column `description` on the `Volume` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Volume" DROP COLUMN "description",
ADD COLUMN     "content" TEXT NOT NULL DEFAULT '';
