// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];


inquirer.prompt([
  {
    type: "input",
    message: "What is the title of your project?",
    name: "name"
  },
  {
    type: "input",
    message: "Please enter a description of your project.",
    name: "description"
  },
  {
    type: "input",
    message: "Please enter the proper installation instructions.",
    name: "installation"
  },
  {
    type: "input",
    message: "Please enter your contribution guidlines.",
    name: "contribution"
  },
  {
    type: "input",
    message: "Please enter all test instructions.",
    name: "test"
  },
  {

    type: "input",
    message: "What license would you like to use for your application?",
    // must be multiple choice
    name: "license"
  },
  
])

.then(response => {
  const pjReadme = `
  # <Your-Project-Title>
## Description
Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?
## Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
## Usage

## Credits


## License
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

 
## Badges


## Features

## How to Contribute

## Tests
Go the extra mile and write tests for your application. Then provide examples on how to run them here.`

fs.writeFile("pjREADME.md", pjReadme, err => {
    err ? console.log("Big trouble my dude!") : console.log("Cool beans!")
  })
})


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

