const inquirer = require("inquirer");
const departments = require("../routes/departmentsRoutes");
// const router = require("router");

function initialPrompts() {
  const firstQuestion = [
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

  inquirer.prompt(firstQuestion).then((name) => {
    const val = Object.values(name).shift().toString();

    //switch statement to handle user choice
    switch (val) {
      case "View All Departments":
        console.log("View All Departments");
        // initialPrompts();
        break;
      case "View All Roles":
        // console.log("View All Roles");
        initialPrompts();
        // viewAllRoles();
        break;
      case "View All Employees":
        console.log("View All Employees");
        initialPrompts();
        // viewAllEmployees();
        break;
      case "Add A Department":
        console.log("Add a department");
        initialPrompts();
        // addADepartment();
        break;
      case "Add A Role":
        console.log("Add a role");
        initialPrompts();
        // addARole();
        break;
      case "Add An Employee":
        console.log("Add an employee");
        initialPrompts();
        // addAnEmployee();
        break;
      default:
        console.log("Back the truck up...");
        // generateHTML();
        break;
    }
  });
}
module.exports = initialPrompts();
