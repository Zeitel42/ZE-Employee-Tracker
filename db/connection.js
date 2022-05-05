const mysql = require("mysql2");
const env = require("dotenv").config();

const db = mysql.createConnection({
  host: "localhost",

  user: process.env.USER_ID,

  password: process.env.USER_KEY,

  database: process.env.DATABASE,
  //   user: "root",
  //   password: "rootroot",
  //   database: "employee_tracker",
});

module.exports = db;
