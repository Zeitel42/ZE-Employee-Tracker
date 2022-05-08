const express = require("express");
const { restoreDefaultPrompts } = require("inquirer");
const connection = require("../db/connection");

// Get department names to use in roles prompt
let rowData;
function getDepartments() {
  let getDepts = `SELECT * FROM departments`;
  return connection
    .promise()
    .query(getDepts)
    .then((res) => {
      let name = Object.values(
        res[0].map(function (departments) {
          return departments;
        })
      );
      // console.log(row);
      return name;
    });
}
// getDepartments()

module.exports = {
  getDepartments,
};
