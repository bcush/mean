console.log('friends controller');

// We need to add a few lines of code here
// Think about this.. how does a controller talk to Mongoose
// and get a model?
// Build out the methods in the friendsController below..

function FriendsController(){
    this.index = function(req, res) {
        // your code here
        Friend.find({}).exec(function(err, friends) {
            if (err) {
                console.log("Friends getAll failed.");
                res.status(500).send(err);
            } else {
                console.log("Friends getAll successful.");
                res.json(friends);
            }
        });
    };

    this.create = function(req, res) {
        // your code here
        console.log("/friends, post");
        console.log(req.body);
        var friend = new Friend(req.body);
        friend.save(function(err) {
            console.log("friend save started");
            if (err) {
                console.log("Friend save failed.");
                res.status(500).send(err);
            } else {
                console.log("Friend POST save success.");
                res.sendStatus(200);
            }
        });
    };

    // this.update = function(req, res) {
    //     // your code here
    //     res.json({placeholder: "update"});
    // };

    this.delete = function(req, res) {
        // your code here
        res.json({placeholder: "delete"});
    };

    this.show = function(req, res) {
        // your code here
        res.json({placeholder: "show"});
    };
}


// What does this export?
// I believe it will run the FriendsController, creating all the methods,
// and then export that instance.

module.exports = new FriendsController();