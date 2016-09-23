/* Require our Mongoose */
var mongoose = require('mongoose');


/* Define our Post model */
var PostSchema = new mongoose.Schema({
    content: String,
    upvote: Number,
    downvoe: Number,
    _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    _topic: {type: mongoose.Schema.Types.ObjectId, ref: 'Topic'},
    _comment: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});

mongoose.model('Post', PostSchema);