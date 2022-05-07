const Employee = require("./lib/Employee.js");

class Manager {
  constructor(officeNumber) {
    // Employee.prototype.officeNumber = 'officeNumber'
    this.officeNumber = officeNumber;
  }
}

function getRole() {
  return "Manager";
}

module.exports = Manager;
