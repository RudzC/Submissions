problem0: "select * from students"

Basic Queries :
FROM students;

1.Get all the names of students in the database
SELECT name
FROM students;

2.Get all the data of students above 30 years old
SELECT *
FROM students
WHERE Age > 30

3.Get the names of the females who are 30 years old
SELECT name
FROM students
WHERE Age = 30 AND Gender = 'F'

4.Get the number of Points of Alex
SELECT Points
FROM students
WHERE name = 'Alex'

5.Add yourself as a new student (your name, your age...)
INSERT INTO students 
(ID,
Name, 
Age, 
Gender, 
Points)
VALUES  (8,'Rudy', 32, 'M', 600)

6.Increase the points of Basma because she solved a new exercise 
UPDATE students
set	Points = points + 100
WHERE name = 'Basma'

7.Decrease the points of Alex because he is late today
UPDATE students
set	Points = points - 30
WHERE name = 'Alex'

Commit ("Basic Queries") 

CREATE TABLE graduates (
ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
Name TEXT NOT NULL UNIQUE,
Age INTEGER,
Gender TEXT,
Points INTEGER,
Graduation TEXT date)


8.Copy Layals data from students to graduates
INSERT INTO graduates (name, Age, Gender, Points)
SELECT name, Age, Gender, Points 
FROM students WHERE name = 'Layal'

9.Add the graduation date previously mentioned to Layals record in graduates
UPDATE graduates 
SET Graduation = '08/09/2018'
WHERE ID = 1

10.Remove Layals record from students
DELETE FROM students
WHERE id = 4

Commit ("Creating Table") 

11.Produce a table that contains, for each employee, his/her name, company name, and company date.
CREATE TABLE Joins (
Name TEXT,
Company TEXT,
Date TEXT date)

12.
INSERT INTO Joins (name, Company, date)
SELECT employees.name, companies.name, companies.date
FROM employees join companies
ON companies.name = employees.Company

13.Find the name of employees that work in companies made before 2000.
SELECT name FROM joins
WHERE date < 2000

14.Find the name of company that has a graphic designer.
SELECT Company FROM employees
WHERE role = "Graphic Designer"

Commit ("Joins")

15.Find the person with the highest number of points in students
SELECT name FROM students
where points = (SELECT max(points) FROM students)

16.Find the average of points in students
SELECT name FROM students
where points = (SELECT avg(points) FROM students)

17.Find the number of students that have 500 points
SELECT COUNT(*) FROM students
where points = 500

18.Find the names of students that contains 's'
SELECT name FROM students
where name like '%s%'

19.Find all students based on the decreasing order of their points
SELECT name FROM students
where points
ORDER BY points DESC

commit ("Count & Filter")
