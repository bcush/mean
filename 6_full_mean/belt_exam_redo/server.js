// Require some packages that we will use
var express    = require('express'),
    path       = require('path'),
    bodyParser = require('body-parser'),
    session    = require('express-session');

// Create variable to contain Session config
var sessionConfig = {
  secret: 'CookieMonster',          // Secret name for decoding secret
  resave: false,                    // Don't resave session if no changes made
  saveUninitialized: true,          // Don't save session if nothing initialized
  name: 'myCookie',                 // Set a custom cookie name
  cookie: {
    secure: false,                  // This needs to true only with HTTPS
    httpOnly: false,                // Forces cookies to be used over HTTP
    maxAge: 3600000
  }
};

// Start the Express app so we can use it
var app = express();

// Load the Mongoose config
require('./server/config/mongoose.js');

// Configure our Middleware
  // Pass our sessionConfig into Middleware
  app.use(session(sessionConfig));

  // Allow our app to parse urlencoded bodies
  app.use(bodyParser.urlencoded({ extended: true }));

  // Allow our app to parse JSON
  app.use(bodyParser.json());

// Log res.session with every HTTP request/response
// app.use(function(req, res, next) {
//   console.log(req.session);
//   next();
// });

// Set static path with every HTTP request/response
app.use(express.static(path.join(__dirname, "client", "static")));

// Load in our routes
require('./server/config/routes.js')(app);

// Start our server
var port = 8000;
app.listen(port, function() {
  console.log("Listening on port " + port + ".");
});
