// Require some packages that we will use
var mongoose = require('mongoose');

// Define our Question schema
var QuestionSchema = new mongoose.Schema({
  question: String,
  description: String,
  name: String,
  answers: [{
    answer: String,
    details: String,
    _user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    likes: {type: Number,
      default: 0}
  }]
}, {timestamps: true});

// Create our Question schema
mongoose.model('Question', QuestionSchema);
