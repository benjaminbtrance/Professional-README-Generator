// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
	// Readme project title
	{
		type: 'input',
		message: 'What is the name of your project?',
		name: 'title',
		validate: (userInput) => {
			if (userInput) {
				return true;
			} else {
				console.log('Please enter a title.');
				return false;
			}
		},
	},
	// Readme project description
	{
		type: 'input',
		message: 'Enter a description of your project.',
		name: 'description',
		validate: (userInput) => {
			if (userInput) {
				return true;
			} else {
				console.log('Please enter a description.');
				return false;
			}
		},
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
