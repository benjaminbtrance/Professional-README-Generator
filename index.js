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
		validate: (titleInput) => {
			if (titleInput) {
				return true;
			} else {
				console.log('Please enter a title to continue.');
				return false;
			}
		},
	},
	// Readme project description
	{
		type: 'input',
		message: 'Enter a description of your project.',
		name: 'description',
		validate: (descriptionInput) => {
			if (descriptionInput) {
				return true;
			} else {
				console.log('Please enter a description to continue.');
				return false;
			}
		},
	},
	// Readme installation steps
	{
		type: 'input',
		message: 'How to install the project?',
		name: 'installation',
		validate: (installationlInput) => {
			if (installationlInput) {
				return true;
			} else {
				console.log('Please enter how to install your project to continue.');
				return false;
			}
		},
	},
	// Readme usage
	{
		type: 'input',
		message: 'How to use your project',
		name: 'usage',
		validate: (usageInput) => {
			if (usageInput) {
				return true;
			} else {
				console.log('Please enter how to use the project to continue.');
				return false;
			}
		},
	},
	// Readme license
	{
		type: 'list',
		message: 'Choose a license for your project',
		name: 'license',
		choices: ['Apache', 'Boost', 'MIT', 'Mozilla', 'IBM', 'None'],
		validate: (licenseInput) => {
			if (licenseInput) {
				return true;
			} else {
				console.log('Please enter a license your project to continue.');
				return false;
			}
		},
	},
	// Readme contributors
	{
		type: 'input',
		message: 'Who contributed to this project',
		name: 'contributors',
		validate: (contributorsInput) => {
			if (contributorsInput) {
				return true;
			} else {
				console.log(
					'Please enter who contributed to the project or type none to continue.'
				);
				return false;
			}
		},
	},
	// Readme test instructions
	{
		type: 'input',
		name: 'test',
		message: 'How to test this project?',
		validate: (testInput) => {
			if (testInput) {
				return true;
			} else {
				console.log('Please enter how to test this project to continue.');
				return false;
			}
		},
	},
	// Github Username
	{
		type: 'input',
		name: 'github',
		message: 'Enter your GitHub Username',
		validate: (githubInput) => {
			if (githubInput) {
				return true;
			} else {
				console.log('Please enter your GitHub username!');
				return false;
			}
		},
	},
	// Email Address
	{
		type: 'input',
		name: 'email',
		message: 'Would you like to include your email?',
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
