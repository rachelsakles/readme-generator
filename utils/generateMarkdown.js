// function to generate markdown for README
function generateMarkdown({ license, title, description, installation, usage, contributing, tests, email, username, questions }) {
  return ` 
  ![license badge](https://img.shields.io/badge/license-${license}-blue)
  # ${title} 
  ## Description 
  ${description} 
  ## Table of Contents 
  * [Installation](#installation) 
  * [Usage](#usage) 
  * [License](#license)
  * [Contributing](#contributing) 
  * [Tests](#tests)  
  * [Questions](#questions) 
  ## Installation
  ${installation}
  ## Usage
  ${usage}
  ## License
  ${license}
  ## Contributing
  ${contributing}
  ## Tests
  ${tests} 
  ## Questions 
  Send questions to ${questions}
  


`;
}

module.exports = generateMarkdown;
