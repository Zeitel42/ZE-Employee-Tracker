const mysql = require("mysql2");
// const env = require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootroot",
  database: "employee_tracker",
  // user: process.env.USER_ID,

  // password: process.env.USER_KEY,

  // database: process.env.DATABASE,
});

module.exports = connection;
