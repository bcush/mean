// Standard Express Setup
var express = require('express');
app = express();


// Include some modules
path = require('path');

// Modify our static locations for Express to include client and Bower
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

// Start our server
var server_port = 8000;
app.listen(server_port, function() {});