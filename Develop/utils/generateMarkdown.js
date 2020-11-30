// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    !https://img.shields.io/badge/license-${data.license}-blue

    ## Description

    # ${data.description}

    ## Table of Contents
      * [Installation Instructions](#installation)
      * [Usage Information](#usage)
      * [Contribution Guidelines](#contributing)
      * [Test Instructions](#tests)
      * [Licenses](#license)

    ## Installation Instructions
    # ${data['installation instructions']}

    ## Usage Information
    # ${data['usage information']}

    ## Contribution Guidelines
    # ${data['contribution guidelines']}

    ## Test Instructions
    # ${data['test instructions']}

    ## Licenses
    # ${data.license}

    ## Questions
    # [${data.username}] (https://github.com/${data.username})
    # E-mail me at ${data['e-mail']} if you have any questions!
`;
};

module.exports = generateMarkdown;
