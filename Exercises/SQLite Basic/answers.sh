problem0: "select * from students"

Basic Queries :
FROM students;

1.
SELECT name
FROM students;

2.
SELECT *
FROM students
WHERE Age > 30

3.
SELECT name
FROM students
WHERE Age = 30 AND Gender = 'F'

4.
SELECT Points
FROM students
WHERE name = 'Alex'

5.
INSERT INTO students 
(ID,
Name, 
Age, 
Gender, 
Points)
VALUES  (8,'Rudy', 32, 'M', 600)

6.
UPDATE students
set	Points = points + 100
WHERE name = 'Basma'

7.
UPDATE students
set	Points = points - 30
WHERE name = 'Alex'


CREATE TABLE graduates (
ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
Name TEXT NOT NULL UNIQUE,
Age INTEGER,
Gender TEXT,
Points INTEGER,
Graduation TEXT date)

8.
INSERT INTO graduates (name, Age, Gender, Points)
SELECT name, Age, Gender, Points 
FROM students WHERE name = 'Layal'

9.
UPDATE graduates 
SET Graduation = '08/09/2018'
WHERE ID = 1

10.
DELETE FROM students
WHERE id = 4

