/*
  Warnings:

  - A unique constraint covering the columns `[userId,week,entryNumber]` on the table `Picks` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Picks_userId_week_entryNumber_key` ON `Picks`(`userId`, `week`, `entryNumber`);
