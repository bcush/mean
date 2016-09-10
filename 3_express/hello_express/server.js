// this is going to be synonymous with app.jps with Node

// first let's load the express module

var express = require("express");

// invoke var express and store the resulting application in our app

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

app.get('/', function(request, response) {
    response.send("<h1>Hello Express</h1>");
})

// notice that the function is app.get(..)
// why do you think the function is called get?

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
