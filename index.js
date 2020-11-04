var inquirer = require("inquirer");
var fs = require("fs");
const license = {
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "ISC": "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    "The Perl License" : "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
    "Eclipse Public License 1.0": "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    "IBM Public License Version 1.0": "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    "Mozilla Public License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "The Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
};

inquirer
  .prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "what is your GitHub username?",
        name: "githubUserName",
    },
    {
        type: "input",
        message: "what is your email address?",
        name: "emailAddress",
    },
    {
      type: "input",
      message: "What is your github repo's title?",
      name: "title"
    },
    {
      type: "input",
      message: "Please describe your project.",
      name: "description", 
    },
    {
        type: "input",
        message: "Please describe your user story. (As A...I WANT...SO THAT...",
        name: "userStory", 
      },
    {
      type: "input",
      message: "Installation Instructions:",
      name: "installation",
    },
    {
        type: "input",
        message: "How will the project be used?",
        name: "usage",
    },
    {
        type: "checkbox",
        message: "License:",
        name: "license",
        choices: [
            "MIT", 
            "ISC", 
            "The Perl License",
            "Eclipse Public License 1.0",
            "IBM Public License Version 1.0",
            "Mozilla Public License 2.0",
            "The Unlicense",
        ]
    },
    {
        type: "input",
        message: "Please enter contributing guidelines:",
        name: "contributing",
    },
    {
        type: "input",
        message: "Please enter testing guidelines:",
        name: "tests",
    },

  ])
  .then(function(response) {
    
    console.log(response);

    let licenseStr = "";
    response.license.forEach(element => {
        licenseStr += license[element] + " ";
    });

    const readme = `

## ${response.title}

${licenseStr}

Explore the [Project Page](https://github.com/${response.githubUserName}/${response.title})

View the [Github-pages](https://${response.githubUserName}.github.io/${response.title}/)

## Table of Contents

* [Description](#description)
    * [User Story](#user-story) 
* [Getting Started](#getting-started)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#License)
* [Questions](#questions)
* [Acknowledgements](#acknowledgements)

## Description:
${response.description}

### User Story

\`\`\`
${response.userStory}
\`\`\`


## Getting Started:
To get a local copy up and running follow the steps below.

### Installation:
1. Clone the Repository:
\`\`\`
sh
git clone git@github.com:${response.githubUserName}/${response.title}.git
\`\`\`
${response.installation}


## Usage:
${response.usage}

## Roadmap:
Currently no known issues, but track track [open issues](https://github.com/${response.githubUserName}/${response.title}/issues ) for proposed features (and known issues) in the future.

## Contributing:
Any contributions you make are **greatly appreciated**.

${response.contributing}

## Tests:
${response.tests}

## License:

${response.license} License

Copyright (c) [2020] [${response.name}]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Questions:
Please reach me if you have additional questions.
${response.name} - ${response.emailAddress}

Project Link: [https://github.com/${response.githubUserName}/${response.title}](https://github.com/${response.githubUserName}/${response.title})

## Acknowledgements: 
* University of Washington Coding Bootcamp for providing me with the skills and knowledge to create this project. 



        `;

        fs.writeFile("README.md", readme, function(err) {

            if (err) {
              return console.log(err);
            }
          
            console.log("Success!");
          
          });
  });


  



