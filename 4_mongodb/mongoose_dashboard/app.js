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
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({ extended: true }));


// Set up our environment variables
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


// Connect to our database
mongoose.connect('mongodb://localhost/mongoose_dashboard');


// Create our Schema
var UserSchema = new mongoose.Schema({
    firstName: String, 
    lastName: String, 
    favoriteLanguage: String
})


// Build model
mongoose.model('User', UserSchema);
var User = mongoose.model('User');


// Set up our routes

// GET '/' Displays all of users in JSON format
app.get('/', function(req, res) {
    User.find({}, function(err, users) {
        if (err) {
            console.log("Ummm.. I think your program doesn't work.");
        } else {
            console.log("I found your documents.");
            console.log(users);
            // res.render("user_index", {"users": users});
            res.json(users);
        }
    })
});

// GET '/users/new' Displays a form for making a new user
app.get('/users/new', function(req, res) {
    res.render('user_form_new');
});


// GET '/users/:id' Displays information about one user in JSON format
app.get('/users/:id', function(req,res) {
    User.findOne({_id: req.params.id}, function (err, users) {
        if (err) {
            console.log("Hey, uhh, I couldn't find the user ID?");
            res.json(err);
        } else {
            console.log("Hey, I uhhhhhhhh.. uhhh.. found the user.");
            res.json(users);
        }
    })
})


// POST '/users' Should be the action attribute for the form in the above route (GET '/users/new').
app.post('/users', function(req, res) {
    // Create a new user from req.body
    var user = new User({ firstName: req.body.first, lastName: req.body.last, favoriteLanguage: req.body.language });
    //  Save user to database, else fail
    user.save(function(err) {
        if (err) {
            console.log("Something here.. is not.. right.");
            res.redirect('/')
        } else {
            console.log("I believe you have added a user now.");
            res.redirect('/')
        }
    })
});


// GET '/users/:id/edit' Should show a form to edit an existing user
app.get('/users/:id/edit', function(req,res) {
    User.findOne({_id: req.params.id}, function (err, users) {
        if (err) {
            console.log("Hey, uhh, I couldn't find the user ID?");
            res.json(err);
        } else {
            console.log("Hey, I uhhhhhhhh.. uhhh.. found the user.");
            console.log(users);
            res.render('user_form_edit', {"users": users});
        }
    })
})


// POST '/users/:id' Should be the action attribute for the form in the above route (GET '/users/:id/edit')
app.post('/users/:id', function(req,res) {
    User.findOne({_id: req.params.id}, function(err, user){
        if (err) {
            console.log("Hey, uhh, I couldn't find the user ID?");
            res.json(err);
        } else {
            user.firstName = req.body.first;
            user.lastName = req.body.last;
            user.favoriteLanguage = req.body.language;
            user.save(function(err) {
                // if save was awesome
                console.log("save was awesome");
                res.redirect('/');
            });
        }
    })
})

// POST '/users/:id/destroy' Should delete the user from the database by ID
app.post('/users/:id/destroy', function(req, res) {
    User.remove({_id: req.params.id}, function(err){
        if (err) {
            console.log("Hey, I couldn't delete the user. Wat up?");
            res.json(err);
        } else {
            console.log("I deleted a user.");
            res.redirect('/')
        }
})
})


//     Quote.find({}, function(err, users) {
//         if (err) {
//             console.log("something went wrong!");
//         } else {
//             console.log("added all users to userQuotes");
//             res.render('quotes', {"users": users});
//         }
//     })
// })

// app.post('/quotes', function(req, res) { };

//     console.log("POST DATA:", req.body);

//     // Create a new quote with Name and Quote from req.body
//     var addQuote = new Quote({name: req.body.name, quote: req.body.quote, timestamp: Date() });

//     // Try to save quote to database
//     addQuote.save(function(err) {
//         if (err) {
//             console.log("something went wrong");
//         } else {
//             console.log("successfully added a quote!");
//             res.redirect('/quotes');
//         }
//     })
// })


// Start our server
var serverPort = 8000;
app.listen(serverPort, function() {
    console.log("Listening on port" + serverPort);
})