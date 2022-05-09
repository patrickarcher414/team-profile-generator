// Import data from Employee.js
const Employee = require("../lib/Employee");

// // Follow this method of writing tests
// Arrange
// Act
// Assert

// Instantiate new Employee Object
test("should instantiate a new employee", () => {
  let employee = new Employee();
  expect(typeof employee).toBe("object");
});

// test getName function
test("returns the name of employee", () => {
  const employee = new Employee("Dave", 1, "dave@email.com");
  const name = employee.getName();
  expect(name).toBe("Dave");
});

// test getId function
test("returns the id of employee", () => {
  const employee = new Employee("Dave", 1, "dave@email.com");
  const id = employee.getId();
  expect(id).toBe(1);
});

// test getEmail
test("returns the email of employee", () => {
  const employee = new Employee("Dave", 1, "dave@email.com");
  const email = employee.getEmail();
  expect(email).toBe("dave@email.com");
});

// test getRole
test("returns the role of employee", () => {
  const employee = new Employee("Dave", 1, "dave@email.com");
  const role = employee.getRole();
  expect(role).toBe("Employee");
});
