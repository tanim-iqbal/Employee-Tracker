const inquirer = require('inquirer');
const mysql = require("mysql2");
const db = require("./lib/db");
const cTab = require("console.table");
const addEmployee = require("./lib/addEmp");
const updateEmployee = require("./lib/updateEmp");
const addRole = require("./lib/addRole");
const { exit } = require('process');


userMain = () => {
  inquirer.prompt([{
    type: 'list',
    message: 'What would you like to do?',
    name: 'userOption',
    choices: [
      'View all employees',
      'View all roles',
      'View all departments',
      'Add an employee',
      'Add a role',
      'Add a department',
      'Update an employee\'s role',
      'Quit'
    ],
  }]).then((answers) => {
    switch (Object.values(answers)[0]) {
      case 'View all employees':
        viewAllEmployees();
        break;
      case 'View all roles':
        viewAllRoles();
        break;
      case 'View all departments':
        viewAllDepartments();
        break;
      case 'Add an employee':
        addEmployee();
        break;
      case 'Add a role':
        addRole();
        break;
      case 'Add a department':
        addDepartment();
        break;
      case 'Update an employee\'s role':
        updateEmployee();
        break;
      case 'Quit':
        exit();
        break;
    }
  });
}

function viewAllEmployees() {
  db.query(`SELECT employees.id AS "Employee ID", employees.first_name, employees.last_name, roles.title AS "Title", dept_name AS "Department", salary,
            CONCAT( manager.first_name, " ", manager.last_name) as Manager
            FROM ((roles
            JOIN employees ON employees.role_id = roles.id)
            JOIN departments ON departments.id = roles.department_id)
            LEFT JOIN employees manager ON employees.manager_id = manager.id
            ORDER BY employees.id`,
    (err, result) => {
      if (err) throw err;
      console.log(`\n`);
      console.table(result);
      userMain();
    })
}

function viewAllRoles() {
  db.query(`SELECT roles.id AS "Role ID", title, departments.dept_name, salary FROM roles
            JOIN departments ON departments.id = roles.department_id`,
    (err, result) => {
      if (err) throw err;
      console.log(`\n`);
      console.table(result);
      userMain();
    })
}

function viewAllDepartments() {
  db.query("SELECT id, dept_name AS Department FROM departments",
    (err, result) => {
      if (err) throw err;
      console.log(`\n`);
      console.table(result);
      userMain();
    });
}

//NOTES: not every employee has a manager.
// Managers are not tied to departments.
// Pseudo code in a channel

addDepartment = () => {
  inquirer.prompt([{
    type: 'input',
    name: 'department',
    message: 'What is the new department?'
  }]).then((answers) => {
    userMain();
    db.query(`INSERT INTO departments (dept_name)
              VALUES ("${answers.department}")`, function (err, result, fields) {
      if (err) throw err;
    })
  })
}

userMain();