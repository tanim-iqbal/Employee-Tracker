//REQUIRED INSTALLS- from Node Library
const inquirer = require('inquirer'); //Inquire prompt 

const db = require('./db'); 
require('console.table');

const mainQuestion = [  {
    type: 'list',
    name: 'pick',
    message: 'What would you like to do? ',
    choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Role', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
  }
]
const addDepartment = [
    {
    type: 'input',
    name: 'addDepName',
    message: 'What department?',
    }
]

const addEmployee = [
    {
        type: 'input',
        name: 'addFisrtName',
        message: 'Enter employee first name:',
    },
    {
        type: 'input',
        name: 'addLastName',
        message: 'Enter employee last name:',
    },
    {
        type: 'list',
        name: 'empRole',
        message: 'What is the employees role?',
     },
    {
        type: 'list',
        name: 'managerName',
        message: 'Choose employee\'s manager',
    }
]

function menu(mainQuestion){
    inquirer
    .prompt(mainQuestion)
    .then((data) => { 
      switch (data.pick) {
        case 'View All Employees':
          db.findAll(); 
          break;
        case 'Add Employee':
          db.addEmployee(); 
          break;
        case 'Update Employee Role':
          db.updateEmpRole();
          break;
        case 'View All Role':
          db.viewAllRole(); 
          break;
        case 'Add Role':
          db.addRole(); 
          break;
        case 'View All Departments':
          db.viewAllDepartments();
          break;
        case 'Add Department':
          db.addDepartment()
          break;
        default:
          console.log("Finished! Thank you!")
          break;
      }
      menu(mainQuestion);
    })
}
menu(mainQuestion);