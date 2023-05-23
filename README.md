# Express Application

This is a TypeScript Node.js Express API with an in-memory database, implemented in an OOP style. The application includes two routes and follows the MVC pattern.

- [Express Application](#express-application)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
    - [ESLint](#eslint)
    - [Linting](#linting)
  - [Building the Application](#building-the-application)
  - [Starting the Application](#starting-the-application)
  - [Development Mode](#development-mode)
  - [API Documentation](#api-documentation)
  - [Note](#note)

## Prerequisites

Make sure you have the following installed:

- Node.js (v18 or above)
- npm (Node Package Manager)

## Installation

Before running the application, make sure you have Node.js 18 and npm (Node Package Manager) installed on your system.

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the project dependencies using npm.

```shell
npm install
```

## Configuration

The application uses environment variables for configuration. Create a .env file in the root directory of the project and configure the following variables:

```shell
PORT=3000
STAGE=DEV #If DEV then database will be seeded
```

Adjust the PORT value as needed. This is the port on which the application will run.

### ESLint

ESLint is used for code linting and follows the rules defined in the .eslintrc.js configuration file. You can modify this file to adjust the linting rules to your preferences.

### Linting

To run ESLint and check for code linting issues:

```shell
npm run lint
```

ESLint is configured with rules defined in the .eslintrc.js file. Make sure to fix any reported linting issues before committing your code.

## Building the Application

To build the TypeScript source code into JavaScript, run the following command:

```shell
npm run build
```

This command will compile the TypeScript files and generate the JavaScript files in the dist directory.

## Starting the Application

To start the Express application, run the following command:

```shell
npm run start
```

This command will build the application (if not already built) and start the server. The application will be accessible at <http://localhost:3000>.

## Development Mode

During development, you can run the application in development mode using the following command:

```shell
npm run dev
```

This command uses nodemon to monitor changes in the source files and automatically restart the server whenever a change is detected. It is useful for a faster development workflow.

## API Documentation

The application provides the following API routes:

- GET /api/getScores => Get all scores
- GET / => serves static HTML file
- POST /api/submitEntry => Submits a users name and word, calculates score and adds to database

## Note

Some words will error as we are using the [Oxford-Dictionary-Json](https://github.com/cduica/Oxford-Dictionary-Json) to validate the words submitted.
