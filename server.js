const express = require("express");
const db = require("./db/connection");
const prompts = require("./utils/prompts");
const inquirer = require("inquirer");
// const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3002;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use("/api", apiRoutes);

app.use((req, res) => {
  res.status(404).end();
});

db.connect(() => {
  console.log("Database Connected.");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
