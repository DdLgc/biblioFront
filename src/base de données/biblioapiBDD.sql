-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 07 juil. 2023 à 13:00
-- Version du serveur : 8.0.31
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `biblioapi`
--

-- --------------------------------------------------------

--
-- Structure de la table `book`
--

DROP TABLE IF EXISTS `book`;
CREATE TABLE IF NOT EXISTS `book` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `autor` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `isbn` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `publishing_date` datetime NOT NULL,
  `is_reserved` tinyint(1) NOT NULL,
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `book`
--

INSERT INTO `book` (`id`, `title`, `autor`, `isbn`, `description`, `publishing_date`, `is_reserved`, `url`) VALUES
(15, 'Les Fleurs du mal (1857)', 'Baudelaire', '0000-0001', 'Description...', '2023-06-14 15:06:13', 0, '../../assets/img/book/les_miserables.jpg'),
(16, 'les misérables', 'Baudelaire', '0000-0002', 'Description...', '2023-06-14 15:06:13', 0, '../../assets/img/book/les_miserables.jpg'),
(17, 'les misérables', 'Baudelaire', '0000-0002', 'Description...', '2023-06-14 15:06:13', 0, '../../assets/img/book/les_miserables.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
CREATE TABLE IF NOT EXISTS `reservation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `return_date_initial` datetime NOT NULL,
  `loan_date` datetime NOT NULL,
  `reel_return_date` datetime DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_42C84955A76ED395` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `reservation`
--

INSERT INTO `reservation` (`id`, `return_date_initial`, `loan_date`, `reel_return_date`, `user_id`) VALUES
(24, '2023-08-04 17:42:03', '2023-07-05 17:42:03', NULL, 6),
(25, '2023-08-04 17:52:58', '2023-07-05 17:52:58', NULL, 6),
(26, '2023-08-04 17:53:08', '2023-07-05 17:53:08', NULL, 6),
(27, '2023-08-04 17:53:15', '2023-07-05 17:53:15', NULL, 6),
(28, '2023-08-04 18:31:24', '2023-07-05 18:31:24', NULL, 6),
(29, '2023-08-05 15:26:42', '2023-07-06 15:26:42', NULL, 6),
(30, '2023-08-05 15:26:43', '2023-07-06 15:26:43', NULL, 6),
(31, '2023-08-05 15:26:46', '2023-07-06 15:26:46', NULL, 6),
(32, '2023-08-05 16:10:21', '2023-07-06 16:10:21', NULL, 6),
(33, '2023-08-05 16:10:32', '2023-07-06 16:10:32', NULL, 6),
(34, '2023-08-05 16:36:44', '2023-07-06 16:36:44', NULL, 6),
(35, '2023-08-05 16:59:53', '2023-07-06 16:59:53', NULL, 6),
(36, '2023-08-05 17:00:08', '2023-07-06 17:00:08', NULL, 6),
(37, '2023-08-05 17:04:03', '2023-07-06 17:04:03', NULL, 6),
(38, '2023-08-05 17:05:54', '2023-07-06 17:05:54', NULL, 6),
(39, '2023-08-05 17:08:29', '2023-07-06 17:08:29', NULL, 6),
(40, '2023-08-05 17:12:03', '2023-07-06 17:12:03', NULL, 6),
(41, '2023-08-05 17:14:46', '2023-07-06 17:14:46', NULL, 6),
(42, '2023-08-05 17:22:52', '2023-07-06 17:22:52', NULL, 6),
(46, '2023-08-05 17:30:51', '2023-07-06 17:30:51', NULL, 6);

-- --------------------------------------------------------

--
-- Structure de la table `reservation_book`
--

DROP TABLE IF EXISTS `reservation_book`;
CREATE TABLE IF NOT EXISTS `reservation_book` (
  `reservation_id` int NOT NULL,
  `book_id` int NOT NULL,
  PRIMARY KEY (`reservation_id`,`book_id`),
  KEY `IDX_DDDC6E59B83297E7` (`reservation_id`),
  KEY `IDX_DDDC6E5916A2B381` (`book_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sur_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `password`, `name`, `sur_name`, `email`, `role`) VALUES
(6, '1234', 'John', 'Doe', 'john@doe.com', ' role'),
(7, '5678', 'Jane', 'Doe', 'jane@doe.com', 'role');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `FK_42C84955A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `reservation_book`
--
ALTER TABLE `reservation_book`
  ADD CONSTRAINT `FK_DDDC6E5916A2B381` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_DDDC6E59B83297E7` FOREIGN KEY (`reservation_id`) REFERENCES `reservation` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
