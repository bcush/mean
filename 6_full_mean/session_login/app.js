// Not sure what this does - verbose logging?
"use strict";

// Simple Session Example
var express = require('express');
var session = require('express-session');       // This is new
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Let's include our Mongoose config
require('./server/config/mongoose.js');

// Let's initialize our Express app now
var app = express();

// Let's configure our Session module now
var sessionConfig = {
    secret: 'Secret',           // Secret name for decoding secret and such
    resave: false,              // Don't resave session if no changes made
    saveUninitialized: true,    // Don't save session if there was nothing init
    name: 'myCookie',           // Sets a custom cookie name
    cookie: {
        secure: false,              // This needs to be true, only for HTTPS
        httpOnly: false,            // Forces cookies to only be used over http
        maxAge: 3600000             // Sets cookie TTL 3,600,000 seconds
    }
}

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))





// Use session with our app
app.use(session(sessionConfig));

// Load our routes
require('./server/config/routes.js')(app);

// Configure our static folder
app.use(express.static(path.join(__dirname,'client')));

// Routes
app.get('/', function(req, res) {
    res.send('You should see a cookie in your client console if you run:document.cookie');
});

// This route is to demonstrate express-session middleware
// The middleware will expose the session on our **request object**
// and save the information we put onto it.
app.get('/saveToSession', function(req,res){
    req.session.info = "save some information to session";
    req.session.name = "by kelvin";
    res.send('go to localhost:8000/seeSession');
});

app.get('/seeSession', function(req,res) {
    res.send(req.session);
});

var port = 8000;

app.listen(port, function() {
    console.log("listening on port", port);
})