const express = require("express");
const inquirer = require("inquirer");
const db = require("./db/connection");
const env = require("dotenv").config();
const prompts = require("./utils/prompts");
const apiRoutes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", apiRoutes);

app.use((req, res) => {
  res.status(404).end();
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database Connected.");
  prompts;
});
