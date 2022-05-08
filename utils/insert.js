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
let deptName;
selectQuery.getDepartments().then((res) => {
  console.log(res.departmentsId);
  deptName = res;
});
// Add a new role
// console.log(rows);
async function addRoles() {
  await inquirer
    .prompt([
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
        choices: deptName,
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("What department does this role belong to?");
            return false;
          }
        },
      },
    ])
    .then((res) => {
      console.log();
      console.log(res);
      // const val = Object.values(title);
      // let roles = `INSERT INTO roles(title)
      //   VALUES ('${val}')`;
      // connection.query(roles, (err, res, fields) => {
      //   if (err) throw err;
      //   const table = cTable.getTable(res);
      //   console.log("New role (", val, ") was added");
      // });
    });
}

module.exports = {
  addDepartments,
  addRoles,
};
