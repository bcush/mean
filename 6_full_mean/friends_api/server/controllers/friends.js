console.log('friends controller');

// We need to add a few lines of code here
// Think about this.. how does a controller talk to Mongoose
// and get a model?
// Build out the methods in the friendsController below..

function FriendsController(){
    this.index = function(req, res) {
        // your code here
        res.json({placeholder: "index"});
    };

    this.create = function(req, res) {
        // your code here
        res.json({placeholder: "create"});
    };

    this.update = function(req, res) {
        // your code here
        res.json({placeholder: "update"});
    };

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