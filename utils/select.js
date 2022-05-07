const express = require("express");
// Get department names to use in roles prompt

async function getDepartments() {
  let getDepts = `SELECT * FROM departments`;
  connection.query(getDepts, (err, res, fields) => {
    if (err) throw err;

    console.log(res.departments_name, " ", res.departmentsId);
    departmentNamesArray.push(res.departments_name);
    console.log(departmentNamesArray);
  });
}

module.exports = {
  getDepartments,
};
