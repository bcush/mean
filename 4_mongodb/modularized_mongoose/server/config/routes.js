var users = require('../controllers/users.js');
module.exports = function(app) {
// GET '/' Displays all of users in JSON format
app.get('/', function(req, res) {
    users.showall(req, res);
});

// GET '/users/new' Displays a form for making a new user
app.get('/users/new', function(req, res) {
    res.render('user_form_new');
});


// GET '/users/:id' Displays information about one user in JSON format
app.get('/users/:id', function(req, res) {
    users.show(req, res);
});


// POST '/users' Should be the action attribute for the form in the above route (GET '/users/new').
app.post('/users', function(req, res) {
    user.create(req, res);
});


// GET '/users/:id/edit' Should show a form to edit an existing user
app.get('/users/:id/edit', function(req, res) {
    user.showedit(req, res);
})


// POST '/users/:id' Should be the action attribute for the form in the above route (GET '/users/:id/edit')
app.post('/users/:id', function(req, res) {
    user.edit(req, res);
})

// POST '/users/:id/destroy' Should delete the user from the database by ID
app.post('/users/:id/destroy', function(req, res) {
    user.destroy(req, res);
})
}