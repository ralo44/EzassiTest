/*
SQLyog Community v13.1.9 (64 bit)
MySQL - 8.0.27 : Database - crud_ezassi
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`crud_ezassi` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `crud_ezassi`;

/*Table structure for table `ezassi` */

DROP TABLE IF EXISTS `ezassi`;

CREATE TABLE `ezassi` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `asignee` varchar(255) NOT NULL,
  `workflow` varchar(255) NOT NULL,
  `score` decimal(11,2) NOT NULL DEFAULT '0.00',
  `summary` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*Data for the table `ezassi` */

insert  into `ezassi`(`id`,`asignee`,`workflow`,`score`,`summary`,`user`,`image`,`created_at`,`updated_at`) values 
(2,'Javier','idea review',9.00,'No summary','Javier','https://s1.eestatic.com/2020/04/06/omicrono/omicrono_480463736_149829533_1706x960.jpg','2022-01-12 15:55:30','2022-01-12 15:55:30'),
(9,'Pastor','idea review',6.00,'With summary','Javier','https://s1.eestatic.com/2020/04/06/omicrono/omicrono_480463736_149829533_1706x960.jpg','2022-01-13 17:35:33','2022-01-13 17:35:33'),
(10,'rafa','idea review',6.00,'With summary','Javier','https://s1.eestatic.com/2020/04/06/omicrono/omicrono_480463736_149829533_1706x960.jpg','2022-01-13 17:35:37','2022-01-13 17:35:37'),
(11,'Charles','idea review',6.00,'With summary','Javier','https://s1.eestatic.com/2020/04/06/omicrono/omicrono_480463736_149829533_1706x960.jpg','2022-01-13 17:37:59','2022-01-13 17:37:59'),
(12,'Carlos','idea review',6.00,'With summary','Javier','https://s1.eestatic.com/2020/04/06/omicrono/omicrono_480463736_149829533_1706x960.jpg','2022-01-13 17:38:00','2022-01-13 17:38:00'),
(13,'rafa','idea review',6.00,'With summary','Javier','https://s1.eestatic.com/2020/04/06/omicrono/omicrono_480463736_149829533_1706x960.jpg','2022-01-13 17:38:01','2022-01-13 17:38:01'),
(14,'rafa','idea review',6.00,'With summary','Javier','https://s1.eestatic.com/2020/04/06/omicrono/omicrono_480463736_149829533_1706x960.jpg','2022-01-13 17:38:01','2022-01-13 17:38:01'),
(15,'rafa','idea review',6.00,'With summary','Javier','https://s1.eestatic.com/2020/04/06/omicrono/omicrono_480463736_149829533_1706x960.jpg','2022-01-13 17:38:02','2022-01-13 17:38:02'),
(16,'rafa','idea review',6.00,'With summary','Javier','https://s1.eestatic.com/2020/04/06/omicrono/omicrono_480463736_149829533_1706x960.jpg','2022-01-13 17:38:03','2022-01-13 17:38:03'),
(17,'rafa','idea review',6.00,'With summary','Javier','https://s1.eestatic.com/2020/04/06/omicrono/omicrono_480463736_149829533_1706x960.jpg','2022-01-13 17:38:04','2022-01-13 17:38:04'),
(18,'Max','Not',0.00,'','Anonymous','no image','2022-01-13 23:54:46','2022-01-13 23:54:46');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
