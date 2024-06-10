-- AlterTable
ALTER TABLE `users` ADD COLUMN `resetPasswordExpires` VARCHAR(191) NULL,
    ADD COLUMN `resetPasswordToken` VARCHAR(191) NULL;
