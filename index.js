const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const inquirer = require("inquirer");
const genFile = require("../src/genFile");
const fs = require("fs");

let team = [];

// prompt info about new Employee
function newEmployee() {
  inquirer
    .prompt([
      {
        name: "role",
        type: "list",
        message: "What is employee's role.",
        choices: ["Manager", "Intern", "Engineer"],
      },
      {
        name: "name",
        type: "input",
        message: "Name of employee: ",
      },
      {
        name: "email",
        type: "input",
        message: "Enter employee's email.",
      },
      {
        name: "id",
        type: "number",
        askAnswered: "true",
        message: "Enter employee's id number.",
      },
    ])
    .then((data) => {
      if (data.role === "Manager") {
        promptManager();
      } else if (data.role === "Intern") {
        promptIntern();
      } else if (data.role === "Engineer") {
        promptEngineer();
      }
    });
}

function addEmployee() {
  inquirer
    .prompt({
      name: "loop",
      type: "confirm",
      message: "Would you like to add another employee?",
    })
    .then((data) => {
      if (data.loop === true) {
        newEmployee();
      } else {
        templateHTML(team);
      }
    });
}

function promptManager() {
  inquirer
    .prompt({
      name: "officeNumber",
      type: "number",
      message: "What is Managers office number?",
    })
    .then((data) => {
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      team.push(manager);
      addEmployee();
    });
}

function promptIntern() {
  inquirer
    .prompt({
      name: "school",
      type: "input",
      message: "What is the name of Interns school?",
    })
    .then((data) => {
      const intern = new Intern(data.name, data.id, data.email, data.school);
      team.push(intern);
      addEmployee();
    });
}

function promptEngineer() {
  inquirer
    .prompt({
      name: "github",
      type: "input",
      message: "Enter URL to Engineer's GitHub.",
    })
    .then((data) => {
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      team.push(engineer);
      addEmployee();
    });
}

newEmployee();
