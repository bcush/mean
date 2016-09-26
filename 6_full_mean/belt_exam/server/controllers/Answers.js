var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');

module.exports = {
    post: function(req,res){
        console.log("/answers, post");
        var answer = new Answer(req.body);
        answer.save(function(err){
            console.log("answer save");
            if (err){
                res.status(500).send("Answer did not save");
            }else{
            console.log("answer post save success");
                res.sendStatus(200);
            }
        });
    },  // Create new answer
    getAll: function(req,res){
        Answer.find({}).exec(function(err,answers){
            if (err){
                res.status(500).send(err);
            }else{
                res.json(answers);
            }
        });
    },  // Create new answer
    get: function(req,res){
        Answer.findOne({_id:req.params.id}).exec(function(err,answer){
            if (err){
                res.status(500).send(err);
            }else{
                res.json(answer);
            }
        });
    },
}

/*
POST /answers
Create a new answer that has a default quantity of 50
GET /answers
Get all answers
DELETE /answers/:id
Delete the answer with that id
PUT /answers/buy/:id
Decrement the quantity of the answer with that id by 1
Do not let it go below zero

*/