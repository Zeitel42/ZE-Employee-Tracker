const inquirer = require("inquirer");
const express = require("express");
const cTable = require("console.table");
const insertInto = require("./insertInto");

const connection = require("../db/connection");
// const queries = require("./queries");

async function initialPrompts() {
  const firstQuestion = [
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
      ],
    },
  ];
  await inquirer.prompt(firstQuestion).then((name) => {
    const val = Object.values(name).shift().toString();

    //switch statement to handle user choice
    switch (val) {
      case "View All Departments":
        // console.log("This is the placeholder for queries");
        let departments = `SELECT * FROM departments`;
        connection.query(departments, (err, res, fields) => {
          if (err) throw err;
          const table = cTable.getTable(res);
          console.log(table);
          initialPrompts();
        });

        break;
      case "View All Roles":
        // console.log("View All Roles");
        let roles = `SELECT * FROM roles`;
        connection.query(roles, (err, res, fields) => {
          if (err) throw err;
          const table = cTable.getTable(res);
          console.log(table);
          initialPrompts();
        });
        break;
      case "View All Employees":
        // console.log("View All Employees");
        let employees = `SELECT * FROM employees`;
        connection.query(employees, (err, res, fields) => {
          if (err) throw err;
          const table = cTable.getTable(res);
          console.log(table);
          initialPrompts();
        });
        break;
      case "Add A Department":
        // console.log("Add a department");

        insertInto.addDepartments();
        // initialPrompts();
        break;
      case "Add A Role":
        // console.log("Add a role");

        // addARole();
        break;
      case "Add An Employee":
        // console.log("Add an employee");
        initialPrompts();
        // addAnEmployee();
        break;
      default:
        console.log("Back the truck up...");
        // generateHTML();
        break;
    }
  });
}
module.exports = initialPrompts();
