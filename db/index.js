const connection = require('./connection');

class DB { 
    findAll(){
        return this.connection.promise().query(
        'SELECT * FROM employee'
    )}
    addEmployee(){
        return this.connection.promise().query(
        'INSERT INTO employees SET ?', emp
    )}
    updateEmpRole(){
        return this.connection.promise().query(
        'SELECT * FROM employee'
    )}
    viewAllRole(){
        return this.connection.promise().query(
        'SELECT roles.id, roles.title, departments.name AS departments, roles.salary FROM roles LEFT JOIN departments  ON roles.departments_id = departments.id;'
    )}
    addRole(){
        return this.connection.promise().query(
        'SELECT * FROM employee'
    )}
    viewAllDepartments(){
        return this.connection.promise().query(
        'SELECT departments.id, departments.name FROM departments'
    )}
    addDepartment(){
        return this.connection.promise().query(
        'SELECT * FROM employee'
    )}
    findAll(){
        return this.connection.promise().query(
        'SELECT * FROM employee'
    )}
}

module.export = new DB(connection); 