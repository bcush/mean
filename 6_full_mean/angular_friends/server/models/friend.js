console.log('friends model');
var mongoose = require('mongoose');

var FriendSchema = new mongoose.schema({
    firstName: String,
    lastName: String,
    birthday: Number
}

// Build your friends schema and add it to the mongoose.models