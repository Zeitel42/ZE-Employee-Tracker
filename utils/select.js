const express = require("express");
const { restoreDefaultPrompts } = require("inquirer");
const connection = require("../db/connection");

// Get department names to use in roles prompt
let rowData;
function getDepartments() {
  let getDepts = `SELECT departments_name FROM departments`;
  connection
    .promise()
    .query(getDepts)
    .then((res) => {
      let row = Object.values(
        res[0].map(function (departments) {
          return departments.departments_name;
        })
      );
      console.log(row);
    });
}
getDepartments();

module.exports = {
  getDepartments,
};
