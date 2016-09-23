/* Require our Mongoose */
var mongoose = require('mongoose');


/* Define our Comment model */
var CommentSchema = new mongoose.Schema({
    content: String,
    _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    _post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
}, {timestamps: true});


mongoose.model('Comment', CommentSchema);