CREATE TABLE purchases (
  id UUID Type,
  client_name text,
  euros_spent integer,
  fidelity_points_earned integer,
  purchase_date timestamp,
  number_of_items smallint,
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
