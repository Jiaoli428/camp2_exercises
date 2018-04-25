SELECT first_name, last_name, department_id, department.name AS depatment_name
FROM employee
INNER JOIN department ON (department.id=employee.department_id);

SELECT first_name, last_name, department.name, location.city, location.state
FROM employee
INNER JOIN department ON (department.id=employee.department_id)
INNER JOIN location ON (location.id=department.location_id);

SELECT first_name, last_name, salary, job_grade.level
FROM employee
INNER JOIN job_grade ON (employee.salary BETWEEN job_grade.lowest_salary AND job_grade.highest_salary);

SELECT first_name, last_name, department.id, department.name
FROM employee
INNER JOIN department ON (department.id=8 OR department.id=4);

SELECT first_name, last_name, department.name, location.city, location.state
FROM employee
INNER JOIN department ON (department.id=employee.department_id)
INNER JOIN location ON (location.id=department.location_id)
WHERE first_name LIKE '%z%';

SELECT department.name, employee.id
FROM employee
right JOIN department ON (department.id=employee.department_id)
--group by department.name;
