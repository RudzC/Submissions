problem0: "select * from students"

Basic Queries :
FROM students;


"SELECT name
FROM students"


"SELECT *
FROM students
WHERE Age > 30"


"SELECT name
FROM students
WHERE Age = 30 AND Gender = 'F'"


"SELECT Points
FROM students
WHERE name = 'Alex'"


"INSERT INTO students 
(ID,
Name, 
Age, 
Gender, 
Points)
VALUES  (8,'Rudy', 32, 'M', 600)"


"UPDATE students
set	Points = points + 100
WHERE name = 'Basma'"


"UPDATE students
set	Points = points - 30
WHERE name = 'Alex'"

Commit ("Basic Queries") 

"CREATE TABLE graduates (
ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
Name TEXT NOT NULL UNIQUE,
Age INTEGER,
Gender TEXT,
Points INTEGER,
Graduation TEXT date)"



"INSERT INTO graduates (name, Age, Gender, Points)
SELECT name, Age, Gender, Points 
FROM students WHERE name = 'Layal'"


"UPDATE graduates 
SET Graduation = '08/09/2018'
WHERE ID = 1"


"DELETE FROM students
WHERE id = 4"

Commit ("Creating Table") 


"CREATE TABLE Joins (
Name TEXT,
Company TEXT,
Date TEXT date)"


"INSERT INTO Joins (name, Company, date)
SELECT employees.name, companies.name, companies.date
FROM employees join companies
ON companies.name = employees.Company"


"SELECT name FROM joins
WHERE date < 2000"


"SELECT Company FROM employees
WHERE role = "Graphic Designer""

Commit ("Joins")


"SELECT name FROM students
where points = (SELECT max(points) FROM students)"


"SELECT name FROM students
where points = (SELECT avg(points) FROM students)"


"SELECT COUNT(*) FROM students
where points = 500"


"SELECT name FROM students
where name like '%s%'"

"SELECT name FROM students
where points
ORDER BY points DESC"

commit ("Count & Filter")
