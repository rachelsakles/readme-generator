const fs = require("fs");
const markdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user
const questions = [ 
    {   type: "input",
        message: "Please enter your GitHub username:",
        name: "username"
    },
    {   type: "input",
        message: "Please enter your email address:",
        name: "email"
    },
    {
        type: "input",
        message: "Please enter the title of your project:",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter a brief description of your project:",
        name: "description"
    },
    {
        type: "input",
        message: "Please enter installation instructions:",
        name: "installation"
    },
    {
        type: "input",
        message: "What kind of license should your project have?",
        name: "license"
    },
    {
        type: "input",
        message: "What should the user know about using the repo?",
        name: "usage"
    },
    {
        type: "input",
        message: "What should the user know about contributing to the repo?",
        name: "contributing"
    }, 
    {
        type: "input",
        message: "How should users test this project?",
        name: "tests"
    }, 
    {
        type: "input",
        message: "Enter email address where you would like questions to be sent",
        name: "questions"
    },



];  

//console.log(questions);


// function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, function(err) { 
    })
}
console.log("success");

// function to initialize program
function init() { 
    inquirer.prompt(questions) 
    .then(function (response){ 
        console.log(response);
        let markdownText = generateMarkdown(response)
        writeToFile("README.md", markdownText)  
        
    })

}

// function call to initialize program
init();
