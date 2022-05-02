const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
}

function getName() {
  const employee = new Employee();
  return employee.name;
}

function getId() {
  const employee = new Employee();
  return employee.id;
}

function getEmail() {
  const employee = new Employee();
  return employee.email;
}

function getRole() {
  return "Employee";
}

module.exports = Employee;
