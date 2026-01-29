/*
  Warnings:

  - A unique constraint covering the columns `[id,userId]` on the table `Project` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX "Project_userId_idx" ON "Project"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Project_id_userId_key" ON "Project"("id", "userId");
