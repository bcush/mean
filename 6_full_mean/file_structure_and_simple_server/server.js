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
require('./server/config/routes.js')(app);

// Start our Express server
app.listen(port, function() {
    console.log( `server running on port ${ port }` );
});
