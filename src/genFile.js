const fs = require("fs");

function templateHTML(team) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
  </head>
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <section>
      ${genCards(team)}
    </section>

  
  </body>
  </html>`;
}

function genCards(team) {
  const employees = team.map((employee) => {
    switch (employee.getRole()) {
      case "Manager":
        return `
          <section>
            <div>
              <h2>${employee.getName()}</h2>
              <p>Manager</p>
            </div>
            <div>
              <p>ID: ${employee.getId()}</p>
              <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
              <p>Office Number: ${employee.getOfficeNumber()}</p>
            </div>
          </section>
        `;
      case "Engineer":
        return `
        <section>
          <div>
            <h2>${employee.getName()}</h2>
            <p>Engineer</p>
          </div>
          <div>
            <p>ID: ${employee.getId()}</p>
            <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
            <p>Github:<a href="https://github.com/${
              employee.github
            }" target='_blank'>${employee.geGithub()}</a></p>
          </div>
        </section>
      `;
      case "Intern":
        return `
        <section>
          <div>
            <h2>${employee.getName()}</h2>
            <p>Intern</p>
          </div>
          <div>
            <p>ID: ${employee.getId()}</p>
            <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
            <p>School: ${employee.getSchool()}</p>
          </div>
        </section>
      `;
    }
  });
  return employees.join("");
}

const genFile = (team) => {
  fs.writeFile("./dist/team-profile.html", templateHTML(team), (err) => {
    if (err) throw err;
    console.log("File created.");
  });
};

module.exports = genFile;
