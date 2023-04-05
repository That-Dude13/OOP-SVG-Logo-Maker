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
        name: "logo",     
        choices: ["yes","no"],

      },

      {
        type: "input",
        message: "What color would you like to display your text?",
        name: "text",
      },

      {
        type: "list",
        message: "What would you like for your first shape?",
        name: "shape",
        choices: ["Triangle, Circle, Square"],
      },

      {
        type: "input",
        message: "What color would like the color of your first shape to be?",
        name: "text",
      },

      {
        type: "list",
        message: "What would you like for your Second shape?",
        name: "shape",
        choices: ["Triangle, Circle, Square"]
      },

      {
        type: "input",
        message: "What color would like the color of your second shape to be?",
        name: "text",
      },

      {
        type: "list",
        message: "What would you like for your third shape?",
        name: "shape",
        choices: ["Triangle, Circle, Square"]
      },

      {
        type: "input",
        message: "What color would like the color of your third shape to be?",
        name: "text",
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

