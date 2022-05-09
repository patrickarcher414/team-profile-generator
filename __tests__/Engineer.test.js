// Import data from Engineer.js
const Engineer = require("../lib/Engineer");

// instantiate new Engineer object
test("should instantiate new Engineer object", () => {
  const engineer = new Engineer();
  expect(typeof engineer).toBe("object");
});

// Return role "Engineer"
test("should GitHub profile name", () => {
  const engineer = new Engineer(
    "Bill",
    2,
    "bill@email.com",
    "williamforrester"
  );
  expect(engineer.getGithub()).toBe("williamforrester");
});

// Return role "Engineer"
test("should return role of Engineer", () => {
  const engineer = new Engineer();
  expect(engineer.getRole()).toBe("Engineer");
});
