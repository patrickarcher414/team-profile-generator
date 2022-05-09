// Import data from Manager.js
const Manager = require("../lib/Manager");

// instantiate new Manager object
test("should instantiate new Manager object", () => {
  const manager = new Manager();
  expect(typeof manager).toBe("object");
});

// Return Office Number
test("should return Manager's office number", () => {
  const manager = new Manager("LaShonda", 3, "lashonda@email.com", 55);
  expect(manager.getOfficeNumber()).toBe(55);
});

// Return role "Manager"
test("should return role of Manager", () => {
  const manager = new Manager();
  expect(manager.getRole()).toBe("Manager");
});
