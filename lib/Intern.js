const Employee = require("./lib/Employee.js");

class Intern {
  constructor(school) {
    this.school = school;
  }
}

function getSchool() {
  const intern = new Intern();
  return intern.school;
}

function getRole() {
  return "Intern";
}

module.exports = Intern;
