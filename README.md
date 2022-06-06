# Roman numerals converter

This is a service that converts integer numbers in roman numerals. It can convert numbers in a range of 1-3999.
It is based on the roman numerals table below:

```
Symbol	I	V	X	L	C	D	M
Value	1	5	10	50	100	500	1000
```

from https://en.wikipedia.org/wiki/Roman_numerals

# Usage

`curl http://localhost:8080/romannumerals?query={integer}`

{integer} should be any number between 1-3999

alteratively open the url in a browser

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
git clone https://github.com/igor-grubic/romans.git
cd romans
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
