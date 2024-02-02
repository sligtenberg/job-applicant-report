# OnWater Code Challenge - Job Applicant Report

job-applicant-report is a JavaScript and React frontend that turns json data into an HTML page.

There is sample json data in db.json

# Local Implementation

Repo: https://github.com/sligtenberg/job-applicant-report/tree/main
Node: v20.11.0

To run on a deveopment server:

Clone the repo down to your local environment.

Install dependencies: $ npm install

### If you are on a mac, the following commands should work:

Start development server: $ json-server --watch db.json
In a separate terminal windown run the frontend in a browser: npm start

### If you are using Windows, try the following instead:

Start development server: npx json-server --watch db.json
Change the start script in /package.json to: "start": "set PORT=4000 && react-scripts start",
In a separate terminal window run the frontend in a browser: npm start

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).