CREATE TABLE `users` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(45),
  `email` varchar(100) UNIQUE NOT NULL,
  `password` varchar(45) NOT NULL,
  `salt` varchar(100) NOT NULL
);

CREATE TABLE `books` (
  `id` integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `format` varchar(45) NOT NULL,
  `category_id` integer(11) NOT NULL,
  `summary` varchar(500),
  `isbn` varchar(45) UNIQUE NOT NULL,
  `detail` longtext,
  `author` varchar(45) NOT NULL,
  `pages` integer(11) NOT NULL,
  `index` integer(11) NOT NULL,
  `price` integer(11) NOT NULL,
  `likes` integer(11) NOT NULL,
  `pub_date` timestamp
);

CREATE TABLE `category` (
  `category_id` integer PRIMARY KEY,
  `name` varchar(100) NOT NULL
);

CREATE TABLE `likes` (
  `user_id` integer,
  `liked_book_id` integer
);

CREATE TABLE `cartItmes` (
  `id` integer PRIMARY KEY,
  `user_id` integer NOT NULL,
  `book_id` integer NOT NULL,
  `count` integer NOT NULL
);

CREATE TABLE `orders` (
  `id` integer PRIMARY KEY,
  `user_id` integer,
  `book_title` varchar(255),
  `total_quantity` integer,
  `total_price` integer,
  `create_at` timestamp,
  `delivery_id` integer
);

CREATE TABLE `delivery` (
  `id` integer PRIMARY KEY,
  `address` varchar(255),
  `receiver` varchar(255),
  `contact` varchar(255)
);

CREATE TABLE `orderedBook` (
  `order_id` integer,
  `book_id` integer,
  `quantity` integer
);

ALTER TABLE `books` ADD FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);

ALTER TABLE `likes` ADD FOREIGN KEY (`liked_book_id`) REFERENCES `books` (`id`);

ALTER TABLE `likes` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `cartItmes` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `cartItmes` ADD FOREIGN KEY (`book_id`) REFERENCES `books` (`id`);

ALTER TABLE `orders` ADD FOREIGN KEY (`delivery_id`) REFERENCES `delivery` (`id`);

ALTER TABLE `orderedBook` ADD FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

ALTER TABLE `orderedBook` ADD FOREIGN KEY (`book_id`) REFERENCES `books` (`id`);

ALTER TABLE `orders` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
