# Requirements

Treat this project as you would treat any serious engineering effort for your employer. Your HTTP Endpoint must accept a URI in this format:
http://localhost:8080/romannumeral?query={integer}
{integer} should be any number between 1-255 unless you are asked for the extension (see below).

# Rules

For the number to numeral conversion itself, do not use existing code or libraries. We want to see your development methodology in action.
Use Java or Javascript as the programming language. If you wish to work in another language, please ask first in response to the email accompanying this test.
Use a public github for your work. Include the link to the github in your response. You may use publicly available technology for the HTTP server, test framework, etc..
Tips to a good score
Find and reference a specification for roman numerals online, Wikipedia is fine. Clear and concise documentation:
README.md with:
How to build and run your project.
Your engineering and testing methodology. Your packaging layout
Dependency attribution
Inline documentation in your source code. Tests
Error handling

# Extension

The extensions are for extra credit unless required in the email accompanying this test.
Extension 1: Expand the set of numbers to 1-3999
Extension 2: Expand the set of numbers to include the Vinculum addition using UTF-8 to roman numerals greater than 3999 and handle all numbers up to 2,200,000,000.
Extension 3: Include dev-ops capabilities for metrics, monitoring, logging
