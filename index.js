// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);


const promptUser = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project (what, why, and how): "
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use. Include screenshots as needed."
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "MIT",
            "Apache 2.0",
            "GNU",
            "BSD3",
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this projects?"
    },
    {
        type: "input",
        name: "tests",
        message: "Is there a test in the project that the user can use?"
    },
    {
        type: "input",
        name: "questions",
        message: "What can I contact if I have an issue?"
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username: "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email: "
    }
])};

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then((answers) => writeFileAsync('readme.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to readme.md'))
        .catch((err) => console.error(err));
    
};
// Function call to initialize app
init();