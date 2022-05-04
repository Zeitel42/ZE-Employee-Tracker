const prompts = require("../utils/prompts");
const mysql = require("mysql2");

// let viewAllDepartments = () => {
//   console.log("Made it from departments!!!");
// };

function viewAllDepartments(db) {
  //   console.log("Made it from departments!!!");
  let sql = "SHOW TABLES";
  console.log(sql);
}

module.exports = viewAllDepartments;
