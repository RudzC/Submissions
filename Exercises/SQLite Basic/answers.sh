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


