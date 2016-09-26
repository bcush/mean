// Require some packages that we will use
var mongoose = require('mongoose');

// Define our User schema
// Require username and require unique value
var UserSchema = new mongoose.Schema({
  username: { type: String, require: true, index: { unique: true }},
  password: String
}, {timestamps: true});

// Create our User schema
mongoose.model('User', UserSchema);
