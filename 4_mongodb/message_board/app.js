// Require our modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

// Create our apps
var app = express();

// Add our middleware
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({ extended: true }));

// Set environment variables
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Connect to our database
mongoose.connect('mongodb://localhost/message_board');

// Establish our Schema variable
var Schema = mongoose.Schema;

// Define our models
var PostSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    },

    comments: {
        [{type: Schema.Types.ObjectId, ref: 'Comment'}]
    }, {timestamps: true}
);

var CommentSchema = new mongoose.Schema({
    _post: {
        type: Schema.Types.ObjectId, ref: 'Post'
    },

    text: {
        type: String,
        required: true
    }, {timestamps: true}

});


// Build models
mongoose.model('Post', PostSchema);
var Post = mongoose.model('Post');

mongoose.model('comment', commentSchema);
var Comment = mongoose.model('Comment');

// Create our routes
app.get('/', function(req, res) {
    res.render('index')
};


// POST route for a new post
app.post('/posts', function(req, res) {
    // Create a new post
    var post = new Post({ text: req.body.message });
    // Save user to database, else fail
    post.save(function(err) {
        if (err) {
            console.log("Unable to create new Post.");
            res.redirect('/');
        } else {
            console.log("New Post created.");
            res.redirect('/');
        }
    })
});


})