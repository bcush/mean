var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    showall: function(req, res) {
        User.find({}, function(err, users) {
            if (err) {
                console.log("Ummm.. I think your program doesn't work.");
            } else {
                console.log("I found your documents.");
                console.log(users);
                res.json(users);
            }
        })
    },

// // GET '/users/new' Displays a form for making a new user
//     showform: function (req, res) {
//         res.render('user_form_new');
// }


// GET '/users/:id' Displays information about one user in JSON format
    show: function(req, res) {
        User.findOne({_id: req.params.id}, function (err, users) {
            if (err) {
                console.log("Hey, uhh, I couldn't find the user ID?");
                res.json(err);
            } else {
                console.log("Hey, I uhhhhhhhh.. uhhh.. found the user.");
                res.json(users);
            }
        })
    },


// POST '/users' Should be the action attribute for the form in the above route (GET '/users/new').
     create: function (req, res) {   
        // Create a new user from req.body
        var user = new User({ firstName: req.body.first, lastName: req.body.last, favoriteLanguage: req.body.language });
        //  Save user to database, else fail
        user.save(function(err) {
            if (err) {
                console.log("Something here.. is not.. right.");
                res.redirect('/')
            } else {
                console.log("I believe you have added a user now.");
                res.redirect('/')
            }
        })
    },


// GET '/users/:id/edit' Should show a form to edit an existing user
    showedit: function (req, res) {
    User.findOne({_id: req.params.id}, function (err, users) {
        if (err) {
            console.log("Hey, uhh, I couldn't find the user ID?");
            res.json(err);
        } else {
            console.log("Hey, I uhhhhhhhh.. uhhh.. found the user.");
            console.log(users);
            res.render('user_form_edit', {"users": users});
        }
    })
    },


// POST '/users/:id' Should be the action attribute for the form in the above route (GET '/users/:id/edit')
    edit: function (req, res) {
        User.findOne({_id: req.params.id}, function(err, user){
            if (err) {
                console.log("Hey, uhh, I couldn't find the user ID?");
                res.json(err);
            } else {
                user.firstName = req.body.first;
                user.lastName = req.body.last;
                user.favoriteLanguage = req.body.language;
                user.save(function(err) {
                    // if save was awesome
                    console.log("save was awesome");
                    res.redirect('/');
                });
            }
        })
    },

// POST '/users/:id/destroy' Should delete the user from the database by ID
    destroy: function (req, res) {
        User.remove({_id: req.params.id}, function(err){
            if (err) {
                console.log("Hey, I couldn't delete the user. Wat up?");
                res.json(err);
            } else {
                console.log("I deleted a user.");
                res.redirect('/')
            }
    })
    }
    }