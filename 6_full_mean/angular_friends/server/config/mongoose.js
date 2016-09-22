// It should require a mongoose.js file from “./server/config”. To confirm
// that the mongoose.js file loads have the top of this file
// console.log(‘future mongoose connection and model loading’);

console.log('mongoose connection, mongoose setup');

var mongoose = require('mongoose');

// Require path for easy dir/file joining
var path = require('path');

// Require file-system so we can load, read, require our model files
var fs = require('fs');

// Set our database URI
var dbURI = 'mongodb://localhost/angular_friends';

// Connect our database
mongoose.connect(dbURI);

// Connection Events
// When successfully connected
mongoose.connection.on('connected', function() {
    console.log( `Mongoose default connection open to ${ dbURI }` );
})

// If the connection throws an error
mongoose.connection.on('error', function(err) {
    console.error(`Mongoose default connection error: ${ err }`);
})

// When the connection is disconnected
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose connection disconnected');
})

// If the Node Process ends, close the Mongoose connection
process.on( 'SIGINT', function() {
  mongoose.connection.close( function () {
    console.log( 'Mongoose default connection disconnected through app termination' );
    process.exit( 0 );
  });
});

// Set directory where our models are located
var models_path = path.join(__dirname, '../models/');

fs.readdirSync(models_path).forEach(function(file){
    if (file.indexOf(".js") >= 0) {
        require(path.join(models_path, file));
    }
})