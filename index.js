// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		message: 'What is the name of your project?',
		name: 'title',
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) =>
		err ? console.log(err) : console.log('Successfully created README!')
	);
}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then((data) => {
		writeToFile('README.md', generateMarkDown(data));
	});
}

// Function call to initialize app
init();
