-- CreateTable
CREATE TABLE `Picks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `week` INTEGER NOT NULL,
    `team` VARCHAR(191) NOT NULL,
    `entryNumber` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Picks` ADD CONSTRAINT `Picks_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
