// Import data from Intern.js
const Intern = require("../lib/Intern");

// instantiate new Intern object
test("should instantiate new Intern object", () => {
  const intern = new Intern();
  expect(typeof intern).toBe("object");
});

// Return school name
test("should return intern's School name", () => {
  const intern = new Intern("LaShonda", 3, "lashonda@email.com", "uwm");
  expect(intern.getSchool()).toBe("uwm");
});

// Return role "Intern"
test("should return role of Intern", () => {
  const intern = new Intern();
  expect(intern.getRole()).toBe("Intern");
});
