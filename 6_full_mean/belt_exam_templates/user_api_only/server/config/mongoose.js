// Require some packages that we will use
var mongoose = require('mongoose'),
    path     = require('path'),
    fs       = require('fs');

// Connect to our MongoDB database
mongoose.connect('mongodb://localhost/belt_exam_redo');

// Set up our models path variable
var models_path = path.join(__dirname, '../models/');

// Setup our app to load every model
fs.readdirSync(models_path).forEach(function(file) {
  if (file.indexOf(".js") >= 0) {
    require(path.join(models_path, file));
  }
});
