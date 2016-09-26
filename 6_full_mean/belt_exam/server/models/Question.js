/* Require our Mongoose */
var mongoose = require('mongoose');


/* Define our Question model */
var QuestionSchema = new mongoose.Schema({
    question: String,
    description: String,
    category: Number,
    upvote: Number,
    downvote: Number,
    _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    _answer: [{type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps: true});

mongoose.model('Question', QuestionSchema);