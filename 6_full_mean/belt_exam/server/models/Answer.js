/* Require our Mongoose */
var mongoose = require('mongoose');


/* Define our Answer model */
var AnswerSchema = new mongoose.Schema({
    answer: String,
    description: String,
    upvote: Number,
    downvote: Number,
    _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    _topic: {type: mongoose.Schema.Types.ObjectId, ref: 'Topic'}
}, {timestamps: true});

mongoose.model('Answer', AnswerSchema);