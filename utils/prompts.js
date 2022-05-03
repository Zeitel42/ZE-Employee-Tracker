const inquirer = require("inquirer");

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
        viewAllDepartments();
        break;
      case "View All Roles":
        // console.log("Intern prompts");
        viewAllRoles();
        break;
      case "View All Employees":
        viewAllEmployees();
        break;
      case "Add A Department":
        addADepartment();
        break;
      case "Add A Role":
        addARole();
        break;
      case "Add An Employee":
        addAnEmployee();
        break;
      case "I'm finished":
        console.log("Writing HTML file...");
        generateHTML();
        break;
    }
  });
}

module.exports = initialPrompts();
