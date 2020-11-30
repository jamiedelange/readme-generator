// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![license badge](https://img.shields.io/badge/license-${data.license}-blue)

  # Description

  ${data.description}

  # Table of Contents
  * [Installation Instructions](#installation-instructions)
  * [Usage Information](#usage-information)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Test Instructions](#test-instructions)
  * [Licenses](#licenses)

  # Installation Instructions
  ${data['installation instructions']}

  # Usage Information
  ${data['usage information']}

  # Contribution Guidelines
  ${data['contribution guidelines']}

  # Test Instructions
  ${data['test instructions']}

  # Licenses
  ${data.license}

  # Questions
  ${data.username}] (https://github.com/${data.username})
  E-mail me at ${data['e-mail']} if you have any questions!
  `;
};

module.exports = generateMarkdown;