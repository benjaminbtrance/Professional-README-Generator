// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(license) {
	if (license === 'Apache') {
		return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
	} else if (license === 'Boost') {
		return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
	} else if (license === 'MIT') {
		return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
	} else if (license === 'Mozilla') {
		return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
	} else if (license === 'IBM') {
		return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
	} else if (license === 'None') {
		return 'None';
	} else {
		return '';
	}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `
# ${data.title}

## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub)

## Description

${data.description}

## Installation

${'```'}
${data.installation}
${'```'}

## Usage

${data.usage}

## Licence

${renderLicense(data.license)}

`;
}

module.exports = generateMarkdown;
