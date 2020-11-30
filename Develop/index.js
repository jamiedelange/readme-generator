const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your readme?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title for your README');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your readme?'
    },
    {
        type: 'input',
        name: 'installation instructions',
        message: 'What are the installation instructions for your readme?'
    },
    {
        type: 'input',
        name: 'usage information',
        message: 'What is the usage information for your readme?'
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'What are the contribution guidelines for your readme?'
    },
    {
        type: 'input',
        name: 'test instructions',
        message: 'What are the test instructions for your readme?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license?',
        choices: ['MIT', 'GNU GPLv3']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter a valid GitHub username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'e-mail',
        message: 'What is your e-mail address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter a valid e-mail address');
                return false;
            }
        }
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('The file has been saved');
    });
};

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        writeToFile('README.md', generateMarkdown(answers));
    });
};

// function call to initialize program
init();