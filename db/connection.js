const mysql = require('mysql2');

// Connect to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'root',
    database: 'employee_db'
  },
  console.log(`Connected employee_db database.`)
);

module.exports = connection; 