USE employee_db;

INSERT INTO department (name)
VALUES  ('Finance'),
        ('HR'),
        ('Sales'),
        ('Customer Service');

INSERT INTO roles ( title ,salary, department_id)
VALUES  ('Shipping&Receiving', 40000, 3),
        ('Sales Lead', 70000, 4),
        ('Accountant', 65000, 1),
        ('HR Manager', 80000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Phil', 'Spencer', 1, NULL),
        ('Bill', 'Gates', 3, 1),
        ('John', 'Wick', 2, NULL);