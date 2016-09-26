// Require some packages that we will use
var mongoose = require('mongoose');

// Make our User model available
var Question = mongoose.model('Question');

// What is module.exports?
// By default, JavaScript doesn’t have a way to pass information between
// different files. module.exports is Node’s way of fixing this problem.
// You can think of module.exports as a giant object for our application. When
// our application starts, this module.exports object looks like this:

// module.exports = {};

// As we start pulling things into our app with require(), everything is added
// to this object. So now as we add that new config.js file with
// require(./config.js);, we have access to those variables since we passed them
// through module.exports. This is how we will be passing information to and
// from all of our files and we’ll see this in practice again when we create
// our routes files. It is also important to note that many tutorials on the
// web will switch between module.exports and exports. They mean the same thing
// and can be used interchangeably.

module.exports = {

  // Question controller for asking a new question
  // Validations:
  ask: function(req, res) {
    console.log("questions.ask called");
    if (req.body.question === "") {
      // HTTP Status 400: Client Error - Bad Request
      res.sendStatus(400);
    } else {
      var question = new Question(req.body);
      question.save(function(err) {
        if (err) {
          // HTTP Status 500: Server Error - Internal Server Error
          res.status(500).send("Question did not save.");
        } else {
          // HTTP Status 200: OK - The Request has Succeeded
          res.status(200).send("Question saved.");
        }
      });
    }
  },

  // Question controller for find a question
  // Named parameters - :id
  getOne: function(req, res) {
    console.log("questions.getOne called");
    Question.findOne({_id: req.params.id}).exec(function(err, question) {
      if (err) {
        // HTTP Status 500: Server Error - Internal Server Error
        res.status(500).send(err);
      } else {
        // Return JSON Object - The Question Found
        res.json(question);
      }
    });
  },

  getAll: function(req, res) {
    console.log("questions.getOne called");
    Question.find({}).exec(function(err, questions) {
      if (err) {
        // HTTP Status 500: Server Error - Internal Server Error
        res.status(500).send(err);
      } else {
        // Return JSON Object - The Question Found
        res.json(questions);
      }
    });
  }
};
