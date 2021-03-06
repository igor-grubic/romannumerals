# Roman numerals converter

This service converts integer numbers in roman numerals. It can convert numbers from 1 to 3999999.
It is based on the roman numerals table below:

```
Symbol	I	V	X	L	C	D	M
Value	1	5	10	50	100	500	1000
```

Using the [vinculum](https://en.wikipedia.org/wiki/roman_numerals#vinculum) notion for numbers > 3999.

from https://en.wikipedia.org/wiki/Roman_numerals

Requirements can be found [here](REQUIREMENTS.md)

# Usage

Run the service with `npm run start` (see development) then

`curl http://localhost:8080/romannumerals?query={integer}`

{integer} should be any number between 1-3999999

alternatively open the url in a browser

# Development

- A linter is used for code quality
- TDD is the chosen approach to development
- Small incremental commits for source control. Linter and tests run on a pre-commit hook.
- express as HTTP the server
- jsdoc for documentation
- dotenv configuration files

#### Requirements

- NodeJS >= 18.3.0
- Npm

#### Getting started

```bash
git clone https://github.com/igor-grubic/romannumerals.git
cd romannumerals
npm install
```

#### Run

```
npm run start
```

#### Test

```
$ npm test
$ npm run watch
```

#### Lint

```
$ npm run lint
```

# Project structure

```
- api
- config
- data
- services
server.js
routes.js
messaging.js
```

# Next steps

- add typescript
- extend range of convertible numbers to 2,200,000,000
- include dev-ops capabilities for metrics, monitoring, logging
