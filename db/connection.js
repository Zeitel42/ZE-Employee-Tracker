const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  // Your MySQL username,
  user: process.env.USER_ID,
  // Your MySQL password
  password: process.env.USER_KEY,
  database: process.env.NODE_ENV,
});

module.exports = db;
