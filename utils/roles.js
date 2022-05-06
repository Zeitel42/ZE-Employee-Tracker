// async function addRoles() {
//     const addARole = [
//       {
//         type: "input",
//         name: "title",
//         message: "What is the name of the new Role?",
//         validate: (nameInput) => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log("please enter the name of the new Role!");
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "salary",
//         message: "What is the salary of the new Role?",
//         validate: (nameInput) => {
//           if (nameInput && nameInput == Number) {
//             return true;
//           } else {
//             console.log("please enter the salary of the new role!");
//             return false;
//           }
//         },
//       },
//       {
//         type: "list",
//         name: "department",
//         message: "What department does the role belong to?",
//         choices: ["Manager", "Maintenance Mechanic"],
//         validate: (nameInput) => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log("please select the department for the new role!");
//             return false;
//           }
//         },
//       },
//     ];
//     await inquirer.prompt(addARole).then(({ title, salary, departmentsId }) => {
//       const val = Object.values(title, salary, departmentsId).shift().toString();
//       let roles = `INSERT INTO roles(title, salary, departmentsId)
//           VALUES ('${val}')`;
//       connection.query(roles, (err, res, fields) => {
//         if (err) throw err;
//         const table = cTable.getTable(res);
//         console.log("New role (", val.title, ")was added");
//       });
//     });
//   }
//   module.exports = {
//     addRoles,
//   };
