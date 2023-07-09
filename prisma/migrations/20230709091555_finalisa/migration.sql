/*
  Warnings:

  - Made the column `updatedAt` on table `TodoItem` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "TodoItem" ALTER COLUMN "updatedAt" SET NOT NULL,
ALTER COLUMN "updatedAt" DROP DEFAULT;
