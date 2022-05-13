const inquirer = require("inquirer");
const express = require("express");
const cTable = require("console.table");
const insert = require("./query");

const connection = require("../db/connection");
// const queries = require("./queries");

async function initialPrompts() {
  await inquirer
    .prompt([
      {
        type: "list",
        name: "firstChoice",
        message: "What would you like to do?",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add A Department",
          "Add A Role",
          "Add An Employee",
          "Update An Employee Role",
        ],
      },
    ])
    .then((name) => {
      const val = Object.values(name).toString();

      //switch statement to handle user choice
      switch (val) {
        case "View All Departments":
          let departments = `SELECT * FROM departments`;
          connection.query(departments, (err, res, fields) => {
            if (err) throw err;
            const table = cTable.getTable(res);
            console.log(table);
            initialPrompts();
          });

          break;
        case "View All Roles":
          let roles = `SELECT * FROM roles`;
          connection.query(roles, (err, res, fields) => {
            if (err) throw err;
            const table = cTable.getTable(res);
            console.log(table);
            initialPrompts();
          });
          break;
        case "View All Employees":
          let employees = `SELECT * FROM employees`;
          connection.query(employees, (err, res, fields) => {
            if (err) throw err;
            const table = cTable.getTable(res);
            console.log(table);
            initialPrompts();
          });
          break;
        case "Add A Department":
          insert.addDepartments().then(async () => {
            await initialPrompts();
          });
          break;
        case "Add A Role":
          insert.addRoles().then(async () => {
            await initialPrompts();
          });

          break;
        case "Add An Employee":
          // initialPrompts();
          insert.addEmployees().then(async () => {
            await initialPrompts();
          });
          break;
        case "Update An Employee Role":
          insert.updateEmployee().then(async () => {
            await initialPrompts();
          });
          break;
        default:
          console.log("Back the truck up...");

          break;
      }
    });
}
initialPrompts();
module.exports = initialPrompts;
