// this is going to be synonymous with app.jps with Node

// first let's load the express module

var express = require("express");

// invoke the var express and store the resulting application in our app

var app = express();

// this is the line that tells our server to use /static folder for
// static content

app.use(express.static(__dirname + "/static"));

// two underscores before dirname
// try printing our __dirname using console.log to see what it is 
// and why we use it

console.log(__dirname);

// it looks like __dirname gives us 'pwd' (for lack of a better term)
// this folder: /Users/beecushman/Workspace/mean/3_express/hello_express
// so in essence we are passing to express.static the following:
// /Users/beecushman/Workspace/mean/3_express/Hello_express + "/static"
// or /Users/beecushman/Workspace/mean/3_express/hello_express/static
// which is the folder we want to use for static files
// we should be able to hit http://localhost:8000/main.html now after
// the routes in the bottom load as well

// now let's use the ejs module that we just 

// now that we created our express app, let's do routes

// app.get('/', function(request, response) {
//     response.send("<h1>Hello Express</h1>");
// })

// this route ^^ is commented out in favor of using .render below

// notice that the function is app.get(..)
// why do you think the function is called get?

// ejs
// now let's have some fun and incorporate ejs into our server
// ejs is the embedded java script module, which we spent a few minutes
// installed using npm

// this sets the location where express will look for the ejs views
app.set('views', __dirname + "/views");

// now lets set the view engine itself, so that express knows that we are
// using ejs as oppossed to another templating engine like jade
app.set('view engine', 'ejs')

// cool so now we have configured node to use ejs as the templating engine
// we also set the folder for ejs to look for views to __dirname/views
// we also set the env variable for view engine to ejs (as opposed to a diff
// templating engine that you could use

// let's go ahead and add a route to our app that will display users
// we aren't going to use a database, so we will just hard core a json object

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brenden", email: "brenden@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})

// notice that we are passing a javascript object to the res.render()
// method. because of this, when we pass a piece of data to the view,
// ** EVERY KEY-VALUE PAIR WITHIN THE LARGER PIECE OF DATA BECOMES ITS OWN
// VARIABLE **
// you will see this in your template HTML

// lets set up some more routing rules
// lets say that you want to create a RESTful environment
// you want to create a /users route that you can POST to

// root route
app.get('/', function(req, res) {
    res.render('index', {title: "my Express project"});
});

// route to process new user form data:

app.post('/users', function(req, res){
    // in here in your code to create a new user in the database

    // lets add a redirect to root, since redirect after post is super good
    res.redirect('/');
});


// now i want to be able to access that POST data, and to do this I need
// to require the body-parser module. i've just installed it using npm.

// require body-parser
var bodyParser = require('body-parser');

// use it!
app.use(bodyParser.urlencoded());

// since we are in the MEAN stack, and everything is JavaScript,
// then we are safe to assume that the data we send in the post request
// will be formatted in JSON

// here is how we are going to get our form data:

app.post('/users', function(req, res){
    console.log('POST DATA \n\n', req.body)
    // code goes here to add user to db
    // now lets redirect the user back to the root route
    res.redirect('/')
});

// now lets say we wanted to get info on a specific user
// we want to setup a restful route to do this
// users/:id // where :id is the id of a particular user. method is get

app.get('/users/:id', function(req, res){
    console.log("the user id requested is: ", req.params.id);
    // just to illustrate that req.params is usabled here:
    res.send("you requested the user with id: " + req.params.id);
    // code to get user from db goes here..
});

// now we loaded the express module, created our server,
// set up our route, now let's tell our server to listen

app.listen(8000, function() {
    console.log("listening on port 8000");
})

// this line will almost always be at the end of your server.js file
// we will tell the server to listen after we have setup our rules

// this is all we need to do to start our first express app

// BUT, we still need to add the express module that is loaded above

// express is a node module, and to do that we use 'npm'
// npm install places the files it installs in the 'node_modules' folder
// when you install the express module, make sure you do it in your projec
// folder
