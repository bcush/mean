// It should require a mongoose.js file from “./server/config”. To confirm
// that the mongoose.js file loads have the top of this file
// console.log(‘future mongoose connection and model loading’);

console.log('future mongoose connection and model loading');

var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');

mongoose.connect('mongodb://localhost/session_login');

var models_path = path.join(__dirname, '../models/');

fs.readdirSync(models_path).forEach(function(file){
    if (file.indexOf(".js") >= 0) {
        require(path.join(models_path, file));
    }
})