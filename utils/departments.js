// const inquirer = require("inquirer");
// const express = require("express");

// // Add a department
// async function addDepartments() {
//   const addADepartment = [
//     {
//       type: "input",
//       name: "newDepartment",
//       message: "What is the name of the new department?",
//       validate: (nameInput) => {
//         if (nameInput) {
//           return true;
//         } else {
//           console.log("please enter the name of the new department!");
//           return false;
//         }
//       },
//     },
//   ];
//   const blah = await inquirer.prompt(addADepartment).then((name) => {
//     const val = Object.values(name).shift().toString();
//     let departments = `INSERT INTO departments(departments_name)
//           VALUES ('${val}')`;
//     connection.query(departments, (err, res, fields) => {
//       if (err) throw err;
//       const table = cTable.getTable(res);
//       console.log("New department (", val, ")was added");
//     });
//   });
// }
// // Get departments to add as choices in add roles
// // async function getDeptNames() {
// //     let getDepts = `SELECT * departments_name FROM departments`;
// //     connection.query(getDepts, (err, res, fields) => {
// //       if (err) throw err;
// //       const val = [Object.values(res).shift().toString()];
// //       // const table = cTable.getTable(res);
// //       console.log(val);
// //     });
// //   }
// //   getDeptNames();
// module.exports = addDepartments();
