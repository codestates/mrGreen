USE mrgreen;

CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nickname` VARCHAR(255),
  `email` VARCHAR(255) not NULL,
  `password` VARCHAR(255) not NULL,
  `gender` VARCHAR(255),
  `created_at` TIMESTAMP,
  `updated_at` TIMESTAMP
);

CREATE TABLE `plant` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `kor_name` VARCHAR(255) not NULL,
  `eng_name` VARCHAR(255),
  `means` VARCHAR(255),
  `description` VARCHAR(255),
  `difficulty` VARCHAR(255),
  `light` VARCHAR(255),
  `water` VARCHAR(255),
  `image` VARCHAR(255),
  `created_at` TIMESTAMP,
  `updated_at` TIMESTAMP
);

CREATE TABLE `favorite` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `userId` INTEGER  not NULL,
  `plantId` INTEGER  not NULL,
  `created_at` TIMESTAMP,
  `updated_at` TIMESTAMP,
  FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  FOREIGN KEY (`plantId`) REFERENCES `plant` (`id`)
);

CREATE TABLE `theme` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `plantId` INTEGER not NULL,
  `interior` BOOLEAN,
  `begginer` BOOLEAN,
  `lucky` BOOLEAN,
  `created_at` TIMESTAMP,
  `updated_at` TIMESTAMP,
  FOREIGN KEY (`plantId`) REFERENCES `plant` (`id`)
);
