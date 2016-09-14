// You are going to build a simple app that allows users to add quotes to
// a database and display them on a seperate page.

// * GET '/' for the index screen
// * POST '/quotes' for the method of the form to make a new quotes
// * GET '/quotes' for when all the quotes are rendered


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
mongoose.connect('mongodb://localhost/quoting_dojo_redux');


// Create our Schema
var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String,
    timestamp: String
})


// Build model
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');


// Set up our routes
app.get('/quotes', function(req, res) {
    Quote.find({}, function(err, users) {
        if (err) {
            console.log("something went wrong!");
        } else {
            console.log("added all users to userQuotes");
            res.render('quotes', {"users": users});
        }
    })
})


// Example:
// db.ninjas.find({_id: ObjectId("5462a78e514e258182f4c69a")})
// Notice: You can't just pass the string of characters, you must pass it as an ObjectId.
app.get('/users/:id', function(req,res) {



})

app.post('/quotes', function(req, res) {
    console.log("POST DATA:", req.body);

    // Create a new quote with Name and Quote from req.body
    var addQuote = new Quote({name: req.body.name, quote: req.body.quote, timestamp: Date() });

    // Try to save quote to database
    addQuote.save(function(err) {
        if (err) {
            console.log("something went wrong");
        } else {
            console.log("successfully added a quote!");
            res.redirect('/quotes');
        }
    })
})


// Start our server
var serverPort = 8000;
app.listen(serverPort, function() {
    console.log("Listening on port" + serverPort);
})