// require mongoose
var mongoose = require('mongoose');

// Create our Schema
var UserSchema = new mongoose.Schema({
    firstName: String, 
    lastName: String, 
    favoriteLanguage: String
})

// Register the schema as a model
mongoose.model('User', UserSchema);

var User = mongoose.model('User');