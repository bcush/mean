// Require the Express Module
var express = require('express');

// Create an Express App
var app = express();

// Require mongoose - recommend adding after var app = express();
var mongoose = require('mongoose');

// This is how we connect to the mongodb database using mongoose
// "basic_mongoose" is the name of our db in mongodb -- this should
// match the name of the db you are going to use for your project.
//
// NOTE: if the database you specify does not exist, then mongo
// will go ahead and create the database for you
mongoose.connect('mongodb://localhost/basic_mongoose');

// let's go ahead and create our first Schema that we will use to model Users
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.model('User', UserSchema);         // we are setting this
                                            // Schema in our Models as 'User'
var User = mongoose.model('User')           // we are retrieving this Schema
                                            // from our Models, named 'User'

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');

// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));

// Require path
var path = require('path');

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));

// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));

// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// Routes
// Root Request
// the root route - we want to get all of the users from the database and
// render the index view passing it all of the users

app.get('/', function(req, res) {
    User.find({}, function(err, users) {
        // this is the method that finds all of the users from the database
        // notice how the first parameter is the options for what to find
        // and the second is the callback function that has an error (if any)
        // and all of the users
        // keep in mind that everything you want to do AFTER you get the users
        // from the database must happen inside of this callback for it to
        // be synchronous
        // make sure you handle the case when there is an error, as well
        // as when there is no error
        if(err) {
            console.log('something went wrong');
        } else {
            console.log(users);
            var usersArray = { "users": users }
            res.render('index', usersArray);
        }
    })
})

// Add User Request
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    var user = new User({name: req.body.name, age: req.body.age});
    // try to save that new user to the database (this is the method that
    // actually inserts into the db) and run a callback function with an error
    // (if any) from the operation
    user.save(function(err) {
    // if there is an error console.log that something went wrong!
    if (err) {
        console.log('something went wrong');
    } else { // else console log that we did well and then redirect to root
        console.log('successfully added a user!');
        res.redirect('/');
    }
    })
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})