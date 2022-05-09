const inquirer = require("inquirer");
const express = require("express");

let initial = [
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
module.exports = initial;
