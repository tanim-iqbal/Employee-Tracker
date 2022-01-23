const express = require('express');

const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }
app.use(express.json());


// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'employee_db'
// }
// );

// connection.connect(function(err){
//     if (err) throw err;
// });

// module.exports = connection;
