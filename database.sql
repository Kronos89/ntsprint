CREATE DATABASE `database`
 CHARACTER SET 'utf8';

CREATE TABLE `database`.incidents
(id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(25),
problem VARCHAR(25),
createdAt DATETIME,
updatedAt DATETIME,
PRIMARY KEY (id));

INSERT INTO `database`.incidents(id, title, problem, createdAt, updatedAt) VALUES (1, 'title1', 'problem1', '2022-10-05 20:10:39', '2022-10-05 20:15:45');
INSERT INTO `database`.incidents(id, title, problem, createdAt, updatedAt) VALUES (2, 'title2', 'problem2', '2022-10-05 20:20:39', '2022-10-05 20:25:45');
INSERT INTO `database`.incidents(id, title, problem, createdAt, updatedAt) VALUES (3, 'title3', 'problem3', '2022-10-05 20:30:39', '2022-10-05 20:35:45');
