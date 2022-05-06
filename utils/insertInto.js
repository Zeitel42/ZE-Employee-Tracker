const inquirer = require("inquirer");
const express = require("express");
const cTable = require("console.table");

const connection = require("../db/connection");
// const queries = require("./queries");

async function addDepartments() {
  const addADepartment = [
    {
      type: "input",
      name: "newDepartment",
      message: "What is the name of the new department?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("please enter the name of the new department!");
          return false;
        }
      },
    },
  ];
  await inquirer.prompt(addADepartment).then((name) => {
    const val = Object.values(name).shift().toString();
    let departments = `INSERT INTO departments(departments_name)
        VALUES ('${val}')`;
    connection.query(departments, (err, res, fields) => {
      if (err) throw err;
      const table = cTable.getTable(res);
      console.log("New department (", val, ") was added");
    });
  });
}

module.exports = {
  addDepartments,
};
