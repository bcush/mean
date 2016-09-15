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
    name: { type: String, require: true },
    text: { type: String, require: true },
    _comments: [ {type: Schema.Types.ObjectId, ref: 'Comment'} ]
    }, {timestamps: true});

var CommentSchema = new mongoose.Schema({
    name: { type: String, require: true },
    text: { type: String, required: true },
    _post: { type: Schema.Types.ObjectId, ref: 'Post' }
    }, {timestamps: true});


// Build models
mongoose.model('Post', PostSchema);
var Post = mongoose.model('Post');

mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment');


// GET route for main index
app.get('/', function(req, res) {
    Post.find({}).populate('_comments').exec(function(err, posts){
        res.render('index', {posts: posts});
    });
});


// POST route for a new post
app.post('/posts', function(req, res) {
    var newPost = new Post({name: req.body.name, text: req.body.message});
    newPost.save(function (err) {
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            console.log("New post saved.");
            res.redirect('/')
        }
    });
});

// POST route for a new comment
app.post('/comment/:id', function(req, res) {
    Post.findOne({_id: req.params.id}, function(err, message){
        var newComment = new Comment({name: req.body.comment_name, text: req.body.comment_comment});
        newComment._message = message._id;
        Post.update({_id: message._id}, {$push: {"_comments": newComment}}, function(err){ });
            newComment.save(function(err){
                if (err) {
                    console.log(err);
                    res.redirect('/');
                } else {
                    console.log("Comment added.");
                    res.redirect("/");
                }
            });
        });
    });


// Start our server
var serverPort = 8000;
app.listen(serverPort, function() {
    console.log("Listening on port" + serverPort);
})