// 1. Have the server render views/index.ejs with the form for the user to fill
// 2. The user fills out the form and submits
// 3. The form information is EMITTED to the server with the event name
//     "posting_form"
// 4. The server listens for an event 'posting_form' and when this event
//     gets triggered, organizes all the emitted information to form
//     a single message and sends the single_message with the event called
//     'updated_message'. It also EMITs an event called 'random_number'
//     with random number between 1-1000.
// 5. The client listens for an event called 'random_number' and when this event
//     gets triggered, shows the number in the HTML.
// 6. The client listens for an event called 'updated_message' and when this
//     event gets triggered, displays the message somewhere in the HTML.


// require express and path
var express = require('express');
var path = require("path");

// create the express app
var app = express();

// static content
app.use(express.static(path.join(__dirname, './static')));

// setting up views and ejs
app.set('views', (path.join(__dirname, './views')));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(request, response) {
  response.render('index');
})

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/submit', function(request, response) {
  console.log('POST DATA', request.body);
  response.render('results', request.body);
})

// tell the express app to listen on port 8000
var port = 8000;
var server = app.listen(port, function() {
  console.log("Listening on port", port);
});

// this is the new line that we add AFTER our server listener
// take special note how we're passing the server
// variable. unless we have the server variable, the line will work!
var io = require('socket.io').listen(server);

// whenever a connection event happens (the connection event is
//     built in) run the following code

io.sockets.on('connection', function(socket) {
    console.log("WE ARE USING SOCKETS!!");
    console.log(socket.id);
    // all the socket code goes in here!
    socket.on("button_clicked", function (data){
        console.log(data.name + data.location + data.language + data.comment);
        socket.emit("server_response", data);

    })
})
