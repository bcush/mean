/* Require our Mongoose */
var mongoose = require('mongoose');

var Topic = mongoose.model('Topic');

module.exports = {
    /* Create a new Topic */
    post: function(req,res){
        console.log("/topics, post");
        var topic = new Topic(req.body);
        console.log(req.session);
        topic._user = req.session.user._id;
        topic.save(function(err){
            console.log("topic save");
            if (err){
                res.status(500).send("Topic did not save");
            }else{
            console.log("topic post save success");
                res.sendStatus(200);
            }
        });
    },
    /* Get all Topics */
    getAll: function(req,res){
        Topic.find({}).populate('_user').exec(function(err,topics){
            if (err){
                res.status(500).send(err);
            }else{
                res.json(topics);
            }
        });
    },
    /* Get one Topic */
    get: function(req,res){
        Topic.findOne({_id:req.params.id}).exec(function(err,topic){
            if (err){
                res.status(500).send(err);
            }else{
                res.json(topic);
            }
        });
    },
    upvote: function(req,res){
        Topic.update({_id:req.params.id}, {$inc:{upvote:1}})
            .exec(function(err,topic){
            if (err){
                res.status(500).send("Topic did not upvote.");
            }else{
                res.sendStatus(200);
            }               
        })
    },

    downvote: function(req,res){
        Topic.update({_id:req.params.id}, {$inc:{downvote:1}})
            .exec(function(err,topic){
            if (err){
                res.status(500).send("Topic did not upvote.");
            }else{
                res.sendStatus(200);
            }               
        })
    }
}

// /*
// POST /products
// Create a new product that has a default quantity of 50
// GET /products
// Get all products
// DELETE /products/:id
// Delete the product with that id
// PUT /products/buy/:id
// Decrement the quantity of the product with that id by 1
// Do not let it go below zero

// */