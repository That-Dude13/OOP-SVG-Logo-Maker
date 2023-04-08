const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes");

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
        type: "list",
        message: "What color would you like to display your text?",
        name: "color",
        choices: ["blue, yellow, green, white"],
      },

      {
        type: "list",
        message: "What would you like for your first shape?",
        name: "shape",
        choices: ["Triangle, Circle, Square"],
      },

      {
        type: "list",
        message: "What color would like the color of your first shape to be?",
        name: "color",
        choices: ["blue, yellow, green, white"],
      },

      {
        type: "list",
        message: "What would you like for your Second shape?",
        name: "shape",
        choices: ["Triangle, Circle, Square"]
      },

      {
        type: "list",
        message: "What color would like the color of your second shape to be?",
        name: "color",
        choices: ["blue, yellow, green, white"],
      },

      {
        type: "list",
        message: "What would you like for your third shape?",
        name: "shape",
        choices: ["Triangle, Circle, Square"]
      },

      {
        type: "list",
        message: "What color would like the color of your third shape to be?",
        name: "color",
        choices: ["blue, yellow, green, white"],
      },

    
    ])


   
    .then((answers) => {
        fs.writeFile("shapes.svg", shapes.js ({Shape}), (err) => {
          if (err) {
            console.error(err);
          }
        });
      });
  }
  
  init();

