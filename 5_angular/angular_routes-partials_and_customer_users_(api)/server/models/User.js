var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    favoriteLanguage: String
})

mongoose.model('User', UserSchema);