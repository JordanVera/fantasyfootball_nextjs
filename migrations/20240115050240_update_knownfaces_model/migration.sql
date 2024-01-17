/*
  Warnings:

  - Added the required column `descriptors` to the `KnownFaces` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `KnownFaces` ADD COLUMN `descriptors` VARCHAR(191) NOT NULL;
