const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'root',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

module.exports = db;