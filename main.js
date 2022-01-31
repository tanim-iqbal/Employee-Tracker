const inquirer = require('inquirer'); //Inquire prompt 
const db = require('./db');
require('console.table');

const mainQuestion = [{
  type: 'list',
  name: 'pick',
  message: 'What would you like to do? ',
  choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Role', 'Add Role', 'View All Departments', 'Add Department', 'Quit']}
]
const addDepQ = [{
  type: 'input',
  name: 'addDepName',
  message: 'What is the name of the department? ',}
]
const addEmpQ = [
  {
    type: 'input',
    name: 'addEmpFName',
    message: 'What is the first name of the employee? ',
  },
  {
    type: 'input',
    name: 'addEmpLName',
    message: 'What is the last name of the employee? ',
  },
  {
    type: 'list',
    name: 'empRole',
    message: 'Which role does the employee belong too?',
    choices: []
  },
  {
    type: 'list',
    name: 'maName',
    message: 'Who is the employee\'s manager',
    choices: []
  }

]
const addRoleQ = [
  {
    type: 'input',
    name: 'addRoleName',
    message: 'What is the name of the role? ',
  },
  {
    type: 'input',
    name: 'roleSalary',
    message: 'What is the salary of the role? ',
  },
  {
    type: 'list',
    name: 'roleDep',
    message: 'Which department does the role belong too?',
    choices: ["a", "b"]
  }
]
const updateQ = [
  {
    type: 'list',
    name: 'updateRole',
    message: 'Which employee\'s role do you want to update?',
    choices: ["a", "b"]
  },
  {
    type: 'list',
    name: 'reassigRole',
    message: 'Which role do you want to assign the selected employee?',
    choices: ["a", "b"]
  },
]


function menu(mainQuestion) {
  inquirer
    .prompt(mainQuestion)
    .then((data) => {
      switch (data.pick) {
        case 'Add Department':
          moreQues(addDepQ);
          break;
        case 'Add Employee':
          moreQues(addEmpQ);
          break;
        case 'Add Role':
          moreQues(addRoleQ);
          break;
        case 'View All Departments':
          console.log(db.viewAllDepartments());
          menu(mainQuestion);
          break;
        case 'View All Employees':
          db.viewAllEmployees();
          menu(mainQuestion);
          break;
        case 'View All Role':
          db.viewAllRole();
          menu(mainQuestion);
          break;
        case 'Update Employee Role':
          moreQues(updateQ);
          break;
        default:
          console.log("Done!")
          break;
      }
    })
}
menu(mainQuestion);