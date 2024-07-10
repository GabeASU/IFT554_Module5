// Student Name: Gabriel Gonzales Bradshaw
// Student ID: ggonza49
// Date: 07/08/2024

//use server.js code from Module 2 Lab 1
const express = require('express');
const app = express();
const port = 3000;

// Import the logger middleware 
const logger = require('./loggerMiddleware'); //add this is to integrate with middleware file

// Use the logger middleware 
app.use(logger); //add this is to integrate with middleware file

// Step 5: Handle Form Submissions:
app.use(express.urlencoded({extended: true}));

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Serve the form
//Needed to add this to get it to work
app.get('/', (req, res) => {
    res.render('form');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


