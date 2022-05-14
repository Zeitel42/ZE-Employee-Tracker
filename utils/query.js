const inquirer = require("inquirer");
const express = require("express");
const cTable = require("console.table");

const connection = require("../connection");

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
    });
}

// Add a new role
async function addRoles() {
  let getDepts = `SELECT departmentsId As value, departments_name As name FROM departments`;
  return connection
    .promise()
    .query(getDepts)
    .then(async ([departments]) => {
      // console.log(departments);
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
          // console.log(answers);
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
  let getManagers = `SELECT employeesId AS value, CONCAT(first_name, " ", last_name) AS name FROM employees 
  INNER JOIN roles ON employees.rolesId = roles.rolesId 
  WHERE roles.title = "Manager"`;

  return connection
    .promise()
    .query(getRoles)
    .then(async ([roleResults]) => {
      // console.log(roleResults);
      return connection
        .promise()
        .query(getManagers)
        .then(async ([managerResults]) => {
          // console.log(managerResults);
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
                choices: roleResults,
                validate: (nameInput) => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log("What department does this role belong to?");
                    return false;
                  }
                },
              },
              {
                type: "list",
                name: "manager",
                message: "Who is the employee's manager?",
                choices: managerResults,
                validate: (nameInput) => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log("please enter a manager!");
                    return false;
                  }
                },
              },
            ])
            .then((answers) => {
              let addNewEmployee =
                "INSERT INTO employees (first_name, last_name, rolesId, managerId) VALUES (?,?,?,?)";
              // console.log(answers);
              connection.query(
                addNewEmployee,
                [
                  answers.first_name,
                  answers.last_name,
                  answers.roles,
                  answers.manager,
                ],
                (err, results) => {
                  // console.log(err);
                  if (err) throw err;
                }
              );
            });
        });
    });
}
async function updateEmployee() {
  let getEmployee = `SELECT employeesId AS value, CONCAT(first_name, " ", last_name) AS name FROM employees`;
  let getRoles = `SELECT rolesId AS value, title AS name FROM roles`;
  return connection
    .promise()
    .query(getEmployee)
    .then(async ([employeeResults]) => {
      // console.log(employeeResults);
      return connection
        .promise()
        .query(getRoles)
        .then(async ([rolesResults]) => {
          // console.log(rolesResults);
          await inquirer
            .prompt([
              {
                type: "list",
                name: "employee",
                message: "What employee would you like to update?",
                choices: employeeResults,
                validate: (nameInput) => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log("I said which. employee. ?");
                    return false;
                  }
                },
              },
              {
                type: "list",
                name: "role",
                message: "What role will the employee assume?",
                choices: rolesResults,
                validate: (nameInput) => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log("Role!");
                    return false;
                  }
                },
              },
            ])
            .then((answers) => {
              let updateEmployeeRole =
                "UPDATE employees SET rolesId = ? WHERE employeesId = ?";
              // console.log(answers);
              connection.query(
                updateEmployeeRole,
                [answers.role, answers.employee],
                (err, results) => {
                  if (err) throw err;
                }
              );
            });
        });
    });
}

module.exports = {
  addDepartments,
  addRoles,
  addEmployees,
  updateEmployee,
};
