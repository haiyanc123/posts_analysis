CREATE DATABASE  IF NOT EXISTS `post_analysis`;
USE `post_analysis`;


DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(40) NOT NULL,
  `social_media` varchar(255) NOT NULL,
  `is_verified` tinyint(1) DEFAULT NULL COMMENT '0-not verified, 1-verified',
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `birth_country` varchar(255) DEFAULT NULL,
  `residence_country` varchar(255) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL COMMENT '0-male, 1-female, 2-other',
  PRIMARY KEY (`username`,`social_media`),
  CONSTRAINT `user_chk_1` CHECK ((`age` between 0 and 120))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `post`;
CREATE TABLE `post` (
  `post_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(40) NOT NULL,
  `social_media` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `has_multimedia` tinyint(1) DEFAULT NULL COMMENT '0- has not; 1- has',
  `time` datetime NOT NULL,
  `likes_num` int DEFAULT NULL,
  `dislike_num` int DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  KEY `username,social_media_idx` (`username`),
  CONSTRAINT `post_chk_1` CHECK ((`likes_num` >= 0)),
  CONSTRAINT `post_chk_2` CHECK ((`dislike_num` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `repost`;
CREATE TABLE `repost` (
  `post_id` int NOT NULL,
  `username` varchar(40) NOT NULL,
  `social_media` varchar(255) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `project`;
CREATE TABLE `project` (
  `proj_name` varchar(255) NOT NULL,
  `institute` varchar(255) NOT NULL,
  `manager` varchar(255) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  PRIMARY KEY (`proj_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `field`;
CREATE TABLE `field` (
  `proj_name` varchar(255) NOT NULL,
  `field_name` varchar(255) NOT NULL,
  PRIMARY KEY (`proj_name`,`field_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `result`;
CREATE TABLE `result` (
  `post_id` int NOT NULL,
  `proj_name` varchar(255) NOT NULL,
  `field_name` varchar(255) NOT NULL,
  `field_value` varchar(255) NOT NULL,
  PRIMARY KEY (`post_id`,`proj_name`,`field_name`),
  KEY `fk_res_project_idx` (`proj_name`,`field_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


