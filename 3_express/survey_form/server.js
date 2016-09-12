// 1. Have the server render the index view.
// -> the index view will have forms for the user to fill out:
// -> your name, dojo location, favorite language, comment
// 2. User will click Submit and the data will go to a route
// -> the route will take the POST data, render a view, and respond in kind
// -> two views needed, one get route for index, one post route to get response

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("index");
})

app.post('/result', function(req, res) {
    console.log("POST DATA", req.body);
    res.render("results", {user: req.body});
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})