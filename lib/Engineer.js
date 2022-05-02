const Employee = require("./lib/Employee.js");

class Engineer {
  constructor(github) {
    this.github = github;
  }
}

function GetGithub() {
  const engineer = new Engineer();
  return engineer.github;
}

function getRole() {
  return "Engineer";
}
module.exports = Engineer;
