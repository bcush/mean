// Mongoose Dashboard:
// Adjustments:
// Require AJAX use through jQuery
// Require a single page application without page refreshes
// Display results as JSON data
// Motivation:
// Get students to try serving up JSON data
// Note to students:
// Display information about users as JSON data - look up res.json for expresss
// Users will have the following structure:
// {
//     firstName: string, 
//     lastName: string, 
//     favoriteLanguage: string
// }

// Use the following routes to build this app:
// GET '/' Displays all of users in JSON format.
// GET '/users/:id' Displays information about one user in JSON format.
// GET '/users/new' Displays a form for making a new user
// POST '/users' Should be the action attribute for the form in the above route (GET '/users/new').
// GET '/users/:id/edit' Should show a form to edit an existing user.
// POST '/users/:id' Should be the action attribute for the form in the above route (GET '/users/:id/edit').
// POST '/users/:id/destroy' Should delete the user from the database by ID.


// Require our modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');


// Create some of our apps
var app = express();


// Set up our middleware
app.use(express.static(path.join(__dirname, './client/static')));
app.use(bodyParser.urlencoded({ extended: true }));


// Set up our environment variables
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');

// store the function in a variable
var routes_setter = require('./server/config/routes.js');

// invoke the function started in routes_setter and pass it to the "app" var
routes_setter(app);

// Start our server
var serverPort = 8000;
app.listen(serverPort, function() {
    console.log("Listening on port" + serverPort);
})