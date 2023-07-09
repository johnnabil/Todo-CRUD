/*
  Warnings:

  - You are about to drop the column `content` on the `TodoList` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TodoList" DROP COLUMN "content",
ADD COLUMN     "TodoItem" TEXT,
ADD COLUMN     "isDone" BOOLEAN NOT NULL DEFAULT false;
