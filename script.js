// TODO: Include packages needed for this application
var inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "Please enter the proper installation instructions.",
    name: "installation",
  },
  {
    type: "input",
    message: "Please enter your contribution guidlines.",
    name: "contribution",
  },
  {
    type: "input",
    message: "Please enter all test instructions.",
    name: "test",
  },
  {
    type: "list",
    message: "What license would you like to use for your application?",
    // must be multiple choice
    name: "license",
    choices: ["Apache-2.0", "MIT", "Artistic-2.0", "MPL-2.0"],
  },
  {
    type: "input",
    message: "What is your github user name?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

function createLicenseBadge(data) {
  if (data.license === "Artistic-2.0") {
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
  }
  if (data.license === "Apache-2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if (data.license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (data.license === "MPL-2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    const pjReadme = `

  # ${response.title}

## Description
${response.description}



## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation
${response.installation}

## Usage


## Credits


## License
${response.license}

${createLicenseBadge(response)}
 
## Badges


## Features

## How to Contribute
${response.contribution}

## Tests
${response.test}

## Questions

You can view my work on my github
[${response.github}](https://github.com/${response.github})

You can contact me at 
${response.email}
`;

    console.log(pjReadme);
    return fs.writeFile("pjREADME.md", pjReadme, (err) => {
      console.log("hello");
      err ? console.log("Big trouble my dude!") : console.log("Cool beans!");
    });
  });
}

// Function call to initialize app
init();
