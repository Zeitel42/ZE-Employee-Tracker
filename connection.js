const mysql = require("mysql2");
const env = require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",

  user: process.env.USER_ID,

  password: process.env.USER_KEY,

  database: process.env.DB,
});

module.exports = connection;
