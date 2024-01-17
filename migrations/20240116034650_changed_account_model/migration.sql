/*
  Warnings:

  - You are about to drop the column `providerId` on the `accounts` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[provider,providerAccountId]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `provider` to the `accounts` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `accounts_providerId_providerAccountId_key` ON `accounts`;

-- AlterTable
ALTER TABLE `accounts` DROP COLUMN `providerId`,
    ADD COLUMN `provider` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `accounts_provider_providerAccountId_key` ON `accounts`(`provider`, `providerAccountId`);
