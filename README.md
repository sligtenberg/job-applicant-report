# OnWater Code Challenge - Job Applicant Report

job-applicant-report is a JavaScript and React frontend that turns json data into an HTML page.

There is sample json data in db.json

Run a json server to see the app in developement mode

React component structure:

MainPage --- Header --< table_data  
         --< JobType --< Applicant --< Skill --< table_data
         --- Footer --- table_data

FontStyle.js styles table cells with inline styling. It can easily be bypassed.

# Local Implementation

Repo: https://github.com/sligtenberg/job-applicant-report/tree/main

Node: v20.11.0

To run on a deveopment server:

Clone the repo down to your local environment.

Install dependencies: $ npm install

### If you are on a mac, the following commands should work:

Start development server: $ json-server db.json

In a separate terminal windown run the frontend in a browser: $ npm start

### If you are using Windows, try the following instead:

You may need to install json_server: $ npm i json-server

Start development server: npx json-server db.json

Change the start script in /package.json to: "start": "set PORT=4000 && react-scripts start",

In a separate terminal window run the frontend in a browser: $ npm start

# Test files

To see how the frontend handles incomplete data, use db2.json. To test new cases, create new json files and tell json-server to use them

$ json-server db2.json

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).