const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const inquirer = require("inquirer");
const genFile = require("./src/genFile");
const fs = require("fs");

const team = [];

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
        message: "Enter employee's id number.",
      },
    ])
    .then((res) => {
      if (res.role === "Manager") {
        promptManager();
      } else if (res.role === "Intern") {
        promptIntern();
      } else if (res.role === "Engineer") {
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
    .then((res) => {
      if (res.loop === true) {
        newEmployee();
      } else {
        genFile(team);
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
    .then((res) => {
      const manager = new Manager(
        res.name,
        res.id,
        res.email,
        res.officeNumber
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
    .then((res) => {
      const intern = new Intern(res.name, res.id, res.email, res.school);
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
    .then((res) => {
      const engineer = new Engineer(res.name, res.id, res.email, res.github);
      team.push(engineer);
      addEmployee();
    });
}

newEmployee();
