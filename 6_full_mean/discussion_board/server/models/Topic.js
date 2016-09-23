/* Require our Mongoose */
var mongoose = require('mongoose');


/* Define our Topic model */
var TopicSchema = new mongoose.Schema({
    topic: String,
    description: String,
    category: Number,
    upvote: Number,
    downvote: Number,
    _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true});

mongoose.model('Topic', TopicSchema);