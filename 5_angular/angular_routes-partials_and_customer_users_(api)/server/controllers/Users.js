// Require Mongoose so we can work with our models
var mongoose = require('mongoose');

// Start defining our User model
var User = mongoose.model('User');
module.exports = {

    // Create new user route
    // Receive: POST verb, create new User object; pass req.body; save Document.
    // Return:  error status (500) or success status (200).
    post: function(req, res) {
        console.log("/users, post");
        console.log(req.body);
        var user = new User(req.body);
        user.save(function(err) {
            console.log("user save started");
            if (err) {
                console.log("User save failed.");
                res.status(500).send(err);
            } else {
                console.log("User POST save success.");
                res.sendStatus(200);
            }
        });
    },

    // Used to return JSON for all User documents.
    // Receive: GET verb, query  for all documents.
    // Return: error status (500) and send 'err' or send JSON if success.
    getAll: function(req, res) {
        User.find({}).exec(function(err, users) {
            if (err) {
                console.log("User getAll failed.");
                res.status(500).send(err);
            } else {
                console.log("User getAll successful.");
                res.json(users);
            }
        });
    },

    // Used to return JSON for a single User document.
    // Receive: GET verb, query for a single document.
    // Return: error status (500) and send 'err' or send JSON if success.
    get: function(req, res) {
        User.findOne({_id: req.params.id}).exec(function(err, user){
            if (err){
                console.log("User get failed.");
                res.status(500).send(err);
            } else {
                console.log("User get successful.");
                res.json(user);
            }
        });
    },

    // Used to delete a single document in MongoDB
    // Receive: DELETE verb, deletes single document record.
    // Return: error status (500) and send 'err' or send JSON if success.
    delete: function(req, res) {
        User.remove({_id: req.params.id}).exec(function(err) {
            if (err) {
                console.log("User delete failed.");
                res.status(500).send(err);
            } else {
                console.log("User delete not successful.");
                res.sendStatus(200);
            }
        });
    }
}