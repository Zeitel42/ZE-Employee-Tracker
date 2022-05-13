const express = require("express");
const cTable = require("console.table");
const connection = require("./db/connection.js");
// const env = require("dotenv").config();
const userPrompts = require("./utils/prompts");

// const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res) => {
  res.status(404).end();
});

connection.connect(async (err) => {
  if (err) throw err;
  // console.log("Database Connected");
});

// userPrompts();
