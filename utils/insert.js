const inquirer = require("inquirer");
const express = require("express");
// const cTable = require("console.table");
const selectQuery = require("./select");

const connection = require("../db/connection");

// Add a new department
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
      console.log("New department (", val, ") was added");
    });
  });
}
// Get department names and store in array

// Add a new role
async function addRoles() {
  let departmentNamesArray = [];
  async function getDeptNames() {
    await selectQuery().then((name) => {
      const val = Object.values(name).shift().toString();
      console.log(name);
    });
  }
  getDeptNames();
  const addARole = [
    {
      type: "input",
      name: "title",
      message: "What is the name of the new role?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("please enter the name of the new role!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "salary",
      message: "What is the salary for the new role?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("please enter the salary for the new role!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "department",
      message: "What department does the new role belong to?",
      choices: departmentNamesArray,
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("please enter the salary for the new role!");
          return false;
        }
      },
    },
  ];
  await inquirer.prompt(addARole).then((title) => {
    const val = Object.values(title).shift().toString();
    let roles = `INSERT INTO roles(title)
      VALUES ('${val}')`;
    connection.query(roles, (err, res, fields) => {
      if (err) throw err;
      const table = cTable.getTable(res);
      console.log("New role (", val, ") was added");
    });
  });
}

module.exports = {
  addDepartments,
  addRoles,
};
