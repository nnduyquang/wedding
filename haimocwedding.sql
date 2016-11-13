-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 14, 2016 at 12:53 AM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `haimocwedding`
--

-- --------------------------------------------------------

--
-- Table structure for table `accessories`
--

CREATE TABLE `accessories` (
  `id_accessory` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `type` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `accessories`
--

INSERT INTO `accessories` (`id_accessory`, `name`, `id`, `created_at`, `updated_at`, `type`) VALUES
(2, 'Cóc xê cho váy', 1, '2016-11-10 05:47:21', '2016-11-10 06:26:23', 0),
(3, 'Tổng Thời Gian Chụp', 1, '2016-11-10 05:47:28', '2016-11-10 06:18:17', 1),
(4, 'Số Shot Hình', 1, '2016-11-10 05:47:51', '2016-11-10 06:20:11', 1),
(5, 'Đồ Cô Dâu', 1, '2016-11-10 05:48:15', '2016-11-10 06:20:20', 1),
(6, 'Áo sơ mi trắng', 1, '2016-11-10 05:49:33', '2016-11-10 06:26:41', 0),
(7, 'Đồ Chú Rể', 1, '2016-11-10 05:49:38', '2016-11-10 06:20:27', 1),
(8, 'Giày cho cô dâu chú rể', 1, '2016-11-10 06:26:55', '2016-11-10 06:26:55', 0),
(9, 'Áo dài cô dâu chú rể', 1, '2016-11-10 06:28:42', '2016-11-10 06:28:42', 0);

-- --------------------------------------------------------

--
-- Table structure for table `accessoriesofalbums`
--

CREATE TABLE `accessoriesofalbums` (
  `id_album` int(10) UNSIGNED NOT NULL,
  `id_accessory` int(10) UNSIGNED NOT NULL,
  `has_accessory` tinyint(1) NOT NULL DEFAULT '0',
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `accessoriesofalbums`
--

INSERT INTO `accessoriesofalbums` (`id_album`, `id_accessory`, `has_accessory`, `description`, `created_at`, `updated_at`) VALUES
(1, 2, 0, NULL, '2016-11-13 08:22:11', '2016-11-13 08:22:11'),
(1, 3, 0, '3333', '2016-11-13 08:22:11', '2016-11-13 08:22:11'),
(1, 4, 0, '4444', '2016-11-13 08:22:11', '2016-11-13 08:22:11'),
(1, 5, 0, '5555', '2016-11-13 08:22:11', '2016-11-13 08:22:11'),
(1, 6, 0, NULL, '2016-11-13 08:22:11', '2016-11-13 08:22:11'),
(1, 7, 0, '6666', '2016-11-13 08:22:11', '2016-11-13 08:22:11'),
(1, 9, 0, NULL, '2016-11-13 08:22:11', '2016-11-13 08:22:11');

-- --------------------------------------------------------

--
-- Table structure for table `albumfolders`
--

CREATE TABLE `albumfolders` (
  `id_folder` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `main_image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `albumfolders`
--

INSERT INTO `albumfolders` (`id_folder`, `name`, `main_image`, `id`, `created_at`, `updated_at`) VALUES
(1, 'Quang', NULL, 1, '2016-11-12 20:47:07', '2016-11-12 20:47:07'),
(2, 'Thu', NULL, 1, '2016-11-12 20:47:17', '2016-11-12 20:47:17'),
(3, 'titi', NULL, 1, '2016-11-12 21:45:33', '2016-11-12 21:45:33'),
(4, 'taka', NULL, 1, '2016-11-13 16:26:02', '2016-11-13 16:26:02');

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE `albums` (
  `id_album` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id_folder` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `albums`
--

INSERT INTO `albums` (`id_album`, `name`, `description`, `id`, `created_at`, `updated_at`, `id_folder`) VALUES
(1, 'asdasdasd', '123', 1, '2016-11-13 08:22:11', '2016-11-13 08:22:11', 1);

-- --------------------------------------------------------

--
-- Table structure for table `albumsatlocations`
--

CREATE TABLE `albumsatlocations` (
  `id_album` int(10) UNSIGNED NOT NULL,
  `id_location` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `albumsatlocations`
--

INSERT INTO `albumsatlocations` (`id_album`, `id_location`, `created_at`, `updated_at`) VALUES
(1, 7, '2016-11-13 08:22:11', '2016-11-13 08:22:11'),
(1, 10, '2016-11-13 08:22:11', '2016-11-13 08:22:11');

-- --------------------------------------------------------

--
-- Table structure for table `albumtypes`
--

CREATE TABLE `albumtypes` (
  `id_albumtype` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `images` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `keywords`
--

CREATE TABLE `keywords` (
  `id_keyword` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `keywordsofalbums`
--

CREATE TABLE `keywordsofalbums` (
  `id_album` int(10) UNSIGNED NOT NULL,
  `id_keyword` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `id_location` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`id_location`, `name`, `created_at`, `updated_at`, `id`) VALUES
(7, 'Bãi Cháy', '2016-10-17 16:36:35', '2016-11-10 05:16:20', 1),
(8, 'Công Viên Châu Á', '2016-10-17 16:36:37', '2016-11-10 05:18:03', 1),
(9, 'Bà Nà', '2016-10-17 16:36:39', '2016-11-10 05:18:31', 1),
(10, 'Công Viên Biển Đông', '2016-11-10 05:19:27', '2016-11-10 05:19:27', 1),
(11, 'Hội An', '2016-11-13 16:29:03', '2016-11-13 16:29:03', 1),
(12, 'Huế', '2016-11-13 16:29:27', '2016-11-13 16:29:27', 1);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_10_14_063304_create_albums_table', 1),
(4, '2016_10_14_073438_create_locations_table', 1),
(5, '2016_10_14_073757_create_keywords_table', 1),
(6, '2016_10_14_074104_create_keywordsofalbums_table', 1),
(7, '2016_10_14_074322_create_albumsatlocations_table', 1),
(8, '2016_10_14_074438_create_services_table', 1),
(9, '2016_10_14_075714_create_albumtypes_table', 1),
(10, '2016_10_14_075909_create_accessories_table', 1),
(11, '2016_10_14_080048_create_plans_table', 1),
(12, '2016_10_16_031433_add_column_locations_tables', 2),
(13, '2016_10_18_031431_drop_foreign_key_services_at_plans_table', 3),
(14, '2016_10_18_031836_create_services_new_table', 3),
(15, '2016_10_18_032132_drop_column_id_service_at_plans_table', 3),
(16, '2016_10_18_032309_create_servicesofplans_table', 3),
(17, '2016_10_18_034322_modify_column_icon_at_services_table', 4),
(18, '2016_10_20_031754_add_column_servicesofplans_table', 5),
(19, '2016_10_21_025904_drop_column_order_at_location_table', 5),
(20, '2016_10_21_030018_add_column_order_at_services_table', 5),
(21, '2016_11_01_072928_drop_accessories_table', 6),
(22, '2016_11_01_073128_create_new_accessories_table', 6),
(23, '2016_11_01_073701_create_accessoriesofplans_table', 6),
(24, '2016_11_03_013433_drop_servicesofplans_table', 7),
(25, '2016_11_03_013831_create_servicesofalbums_table', 7),
(26, '2016_11_04_132252_create_albumfolders_table', 8),
(27, '2016_11_04_132627_add_column_id_folder_at_albums_table', 9),
(28, '2016_11_04_133723_modify_column_main_image_at_albumfolders_table', 10),
(29, '2016_11_08_071644_drop_column_images_at_albums_table', 11),
(30, '2016_11_08_231411_fix_plans_and_accessories_table', 12);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id_service` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `order` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id_service`, `name`, `icon`, `id`, `created_at`, `updated_at`, `order`) VALUES
(1, 'Làm Tóc Và Trang Điểm Cô Dâu Chú Rể', '/public/images/temps/hair_makeup.png', 1, '2016-11-10 06:33:18', '2016-11-10 06:33:18', 1),
(2, 'Phụ Kiện Chụp Hình', '/public/images/temps/set_of_accessories.png', 1, '2016-11-10 06:33:46', '2016-11-10 06:33:46', 1),
(3, 'Đạo Cụ', '/public/images/temps/photo_props.png', 1, '2016-11-10 06:34:27', '2016-11-10 06:34:27', 1),
(4, 'Tất Cả Hình Gốc', '/public/images/temps/all_photo_data.png', 1, '2016-11-10 06:35:13', '2016-11-10 06:35:13', 1),
(5, 'Album 12x12 Với 2 Mini Album', '/public/images/temps/a3_photo_board.png', 1, '2016-11-10 06:36:47', '2016-11-10 06:36:47', 1),
(6, 'Chỉnh Sửa Hình Ảnh', '/public/images/temps/simple_edited_photodata.png', 1, '2016-11-10 06:37:17', '2016-11-10 06:37:17', 1),
(7, 'Thông Dịch Viên Tiếng Anh', '/public/images/temps/englsih_speaking_guide.png', 1, '2016-11-10 06:37:42', '2016-11-10 06:37:42', 1),
(8, 'Phương Tiện Di Chuyển', '/public/images/temps/transportation_expenses.png', 1, '2016-11-10 06:38:16', '2016-11-10 06:38:16', 1),
(9, 'Ăn Trưa', '/public/images/temps/plan-icn-tuxedo.png', 1, '2016-11-10 06:38:58', '2016-11-10 06:38:58', 1);

-- --------------------------------------------------------

--
-- Table structure for table `servicesofalbums`
--

CREATE TABLE `servicesofalbums` (
  `id_service` int(10) UNSIGNED NOT NULL,
  `id_album` int(10) UNSIGNED NOT NULL,
  `has_servive` tinyint(1) NOT NULL DEFAULT '0',
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `servicesofalbums`
--

INSERT INTO `servicesofalbums` (`id_service`, `id_album`, `has_servive`, `description`, `created_at`, `updated_at`) VALUES
(1, 1, 0, 'yyyyy', '2016-11-13 08:22:11', '2016-11-13 08:22:11'),
(3, 1, 0, 'zzzzz', '2016-11-13 08:22:11', '2016-11-13 08:22:11'),
(4, 1, 0, '', '2016-11-13 08:22:11', '2016-11-13 08:22:11');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Quang Nguyen', 'nnduyquang@gmail.com', '$2y$10$JjJGNbcSHvDzH8c/UkFD5Oao10cmTV/2TjPUNdxZhQmJNTze7F6Vy', '1ziRptIp7SZOd3k4eHJZEjm8ISsdbesnDVXNEu4C0m8GozGSkQ7y4M6Tvabe', NULL, '2016-10-15 23:25:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accessories`
--
ALTER TABLE `accessories`
  ADD PRIMARY KEY (`id_accessory`),
  ADD KEY `accessories_id_foreign` (`id`);

--
-- Indexes for table `accessoriesofalbums`
--
ALTER TABLE `accessoriesofalbums`
  ADD PRIMARY KEY (`id_album`,`id_accessory`);

--
-- Indexes for table `albumfolders`
--
ALTER TABLE `albumfolders`
  ADD PRIMARY KEY (`id_folder`),
  ADD KEY `albumfolders_id_foreign` (`id`);

--
-- Indexes for table `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id_album`),
  ADD KEY `albums_id_foreign` (`id`),
  ADD KEY `albums_id_folder_foreign` (`id_folder`);

--
-- Indexes for table `albumsatlocations`
--
ALTER TABLE `albumsatlocations`
  ADD PRIMARY KEY (`id_album`,`id_location`);

--
-- Indexes for table `albumtypes`
--
ALTER TABLE `albumtypes`
  ADD PRIMARY KEY (`id_albumtype`);

--
-- Indexes for table `keywords`
--
ALTER TABLE `keywords`
  ADD PRIMARY KEY (`id_keyword`);

--
-- Indexes for table `keywordsofalbums`
--
ALTER TABLE `keywordsofalbums`
  ADD PRIMARY KEY (`id_album`,`id_keyword`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id_location`),
  ADD KEY `locations_id_foreign` (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`),
  ADD KEY `password_resets_token_index` (`token`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id_service`),
  ADD KEY `services_id_foreign` (`id`);

--
-- Indexes for table `servicesofalbums`
--
ALTER TABLE `servicesofalbums`
  ADD PRIMARY KEY (`id_service`,`id_album`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accessories`
--
ALTER TABLE `accessories`
  MODIFY `id_accessory` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `albumfolders`
--
ALTER TABLE `albumfolders`
  MODIFY `id_folder` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `albums`
--
ALTER TABLE `albums`
  MODIFY `id_album` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `albumtypes`
--
ALTER TABLE `albumtypes`
  MODIFY `id_albumtype` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `keywords`
--
ALTER TABLE `keywords`
  MODIFY `id_keyword` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `id_location` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id_service` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `accessories`
--
ALTER TABLE `accessories`
  ADD CONSTRAINT `accessories_id_foreign` FOREIGN KEY (`id`) REFERENCES `users` (`id`);

--
-- Constraints for table `albumfolders`
--
ALTER TABLE `albumfolders`
  ADD CONSTRAINT `albumfolders_id_foreign` FOREIGN KEY (`id`) REFERENCES `users` (`id`);

--
-- Constraints for table `albums`
--
ALTER TABLE `albums`
  ADD CONSTRAINT `albums_id_folder_foreign` FOREIGN KEY (`id_folder`) REFERENCES `albumfolders` (`id_folder`),
  ADD CONSTRAINT `albums_id_foreign` FOREIGN KEY (`id`) REFERENCES `users` (`id`);

--
-- Constraints for table `locations`
--
ALTER TABLE `locations`
  ADD CONSTRAINT `locations_id_foreign` FOREIGN KEY (`id`) REFERENCES `users` (`id`);

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `services_id_foreign` FOREIGN KEY (`id`) REFERENCES `users` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
