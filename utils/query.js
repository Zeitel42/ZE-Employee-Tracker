const inquirer = require("inquirer");
const express = require("express");
const initialPrompts = require("./prompts");
// const cTable = require("console.table");
// const selectQuery = require("./select");

const connection = require("../db/connection");
const initial = require("./prompts");
const res = require("express/lib/response");

// Add a new department
async function addDepartments() {
  await inquirer
    .prompt([
      {
        type: "input",
        name: "departments_name",
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
    ])
    .then((answers) => {
      let departments = `INSERT INTO departments(departments_name)
        VALUES (?)`;
      connection.query(
        departments,
        [answers.departments_name],
        (err, results) => {
          if (err) throw err;
          console.log(
            "New department (",
            answers.departments_name,
            ") was added"
          );
        }
      );
      if (answers != "") {
        initial;
      }
    });
}
// Get department names and store in array

// Add a new role
function addRoles() {
  let getDepts = `SELECT departmentsId As value, departments_name As name FROM departments`;
  connection.query(getDepts, async (err, departments) => {
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
          choices: departments,
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
      .then((answers) => {
        let addNewRole =
          "INSERT INTO roles (title, salary, departmentsId) VALUES (?,?,?)";
        console.log(answers);
        connection.query(
          addNewRole,
          [answers.title, answers.salary, answers.department],
          (err, results) => {
            if (err) throw err;
          }
        );
      });
  });
}
async function addEmployees() {
  let getRoles = `SELECT rolesId AS value, title AS name FROM roles`;
  connection.query(getRoles, async (err, results, field) => {
    console.log(results);
    await inquirer
      .prompt([
        {
          type: "input",
          name: "first_name",
          message: "What is the employee's first name?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("please enter a first name.");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "last_name",
          message: "What is the employee's last name?",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("please enter a last name!");
              return false;
            }
          },
        },
        {
          type: "list",
          name: "roles",
          message: "What role will the employee hold?",
          choices: results,
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("What department does this role belong to?");
              return false;
            }
          },
        },
        // {
        //   type: "list",
        //   name: "manager",
        //   message: "Who is the employee's manager?",
        //   choice: result,
        //   validate: (nameInput) => {
        //     if (nameInput) {
        //       return true;
        //     } else {
        //       console.log("please enter a manager!");
        //       return false;
        //     }
        //   },
        // },
      ])
      .then((answers) => {
        let addNewEmployee =
          "INSERT INTO employees (first_name, last_name, job_title, rolesId, managerId) VALUES (?,?,?,?,?)";
        console.log(answers);
        connection.query(
          addNewEmployee,
          [
            answers.first_name,
            answers.last_name,
            answers.roles.name,
            answers.roles.value,
            1,
          ],
          (err, results) => {
            if (err) throw err;
          }
        );
      });
  });
}

module.exports = {
  addDepartments,
  addRoles,
  addEmployees,
};
