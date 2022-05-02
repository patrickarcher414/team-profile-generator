const Employee = require("./lib/Employee.js");

class Manager {
  constructor(officeNumber) {
    this.officeNumber = officeNumber;
  }
}

function getRole() {
  return "Manager";
}

module.exports = Manager;
