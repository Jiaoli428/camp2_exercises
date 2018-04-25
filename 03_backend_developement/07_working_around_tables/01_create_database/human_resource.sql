CREATE TABLE region (
  id serial,
  name varchar
);

CREATE TABLE country (
  id serial,
  name varchar,
  region_id int4
);

CREATE TABLE location (
id serial,
street_address varchar,
postal_code varchar,
city varchar,
state varchar,
country_id int4
);

CREATE TABLE job (
id serial,
title varchar,
min_salary float4,
max_salary float4
);

CREATE TABLE job_grade (
id serial,
level varchar,
lowest_salary float4,
highest_salary float4
);

CREATE TABLE job_history (
id serial,
employee_id int4,
start_date timestamp,
end_date timestamp,
job_id int4,
department_id int4
);

CREATE TABLE department (
id serial,
name varchar,
manager_id int4,
location_id int4
);

CREATE TABLE employee (
id serial,
first_name varchar,
last_name varchar,
email varchar,
phone_number varchar,
hire_date timestamp,
job_id int4,
salary float4,
manager_id int4,
department_id int4
);

SELECT first_name || ' ' || last_name, salary
FROM employee
WHERE salary < 6000;

SELECT first_name, last_name, department_id, salary
FROM employee
WHERE salary > 8000;

SELECT first_name, last_name, department_id
FROM employee
WHERE last_name = 'McEwen';

SELECT first_name, last_name, department_id
FROM employee
WHERE department_id is null;

SELECT location_id, manager_id
FROM department
WHERE name = 'Marketing';

SELECT first_name || ' ' || last_name, salary, hire_date, department_id
FROM employee
WHERE first_name not LIKE '%M%'
ORDER BY department_id;

SELECT first_name || ' ' || last_name AS Full_Name, phone_number ||'-'||email AS Contact_Details, salary
FROM employee
WHERE salary > 9000 AND salary < 17000;

SELECT first_name || ' ' || last_name AS Full_Name, salary
FROM employee
WHERE first_name LIKE '%m';

SELECT first_name || ' ' || last_name AS Full_Name , salary
FROM employee
WHERE salary < 7000 OR salary > 15000
ORDER BY Full_Name;

SELECT first_name || ' ' || last_name AS Full_Name , job_id, hire_date
FROM employee
WHERE hire_date BETWEEN '2007-11-05' AND '2009-07-05';

SELECT first_name || ' ' || last_name AS Full_Name , department_id
FROM employee
WHERE department_id = 7 OR department_id = 9;

SELECT first_name || ' ' || last_name AS Full_Name , salary, manager_id
FROM employee
ORDER BY manager_id;

SELECT*
FROM employee
WHERE hire_date < '2002-06-21';

SELECT COUNT(*), employee_id
FROM job_history
GROUP by employee_id
HAVING COUNT(*) > 1;

SELECT COUNT(*), job_id, SUM(salary), MAX(salary)-MIN(salary) AS difference
FROM employee
GROUP by job_id;

SELECT COUNT(*), manager_id, department_id
FROM employee
GROUP by manager_id, department_id
HAVING COUNT(*) > 4;
