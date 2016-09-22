// 1) require the correct files and set the appropriate variables for the
// routes.js file to work.
// 2) require the correct files and set the correct variables for the
// controllers/friends.js file to appropriately communicate with your DB
// and perform the indicated RESTful routes.
// 3) require the correct files and generate a fitting model for friends
// in the models/friend.js file.

// Require our modules
var mongoose = require('mongoose'),
    express  = require('express'),
    bp       = require('body-parser'),
    path     = require('path'),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();

// Include our Mongoose config
require('./server/config/mongoose.js');

// Configure our middleware

app.use(express.static(path.join(root,'client')));
app.use(express.static(path.join(root,'bower_components')));
app.use(bp.urlencoded({extended:true}))
app.use(bp.json())

// Load our routes
// Since routes.js exports a function,
// require("./server/config/routes.js") is a function!
// now we invoke it, passing it app!
require('./server/config/routes.js')(app);

// Start our Express server
app.listen(port, function() {
    console.log( `server running on port ${ port }` );
});
