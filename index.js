const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require(".shapes.js");
const test = require("./lib/shapes.test")

function init() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to create a logo?",
        choices: ["yes","no"],

      },

      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },

      {
        type: "input",
        message: "Enter a description of your project",
        name: "description",
      },
    
    ])
   
    // .then((-needs parameter-) => {
    //     fs.writeFile("README.md", generateMarkdown(answers), (err) => {
    //       if (err) {
    //         console.error(err);
    //       }
    //     });
    //   });
  }
  
  init();

