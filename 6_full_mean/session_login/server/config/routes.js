var users = require('../controllers/Users.js');

// Let's define our server side routes
module.exports = function(app) {
    app.post('/register', users.register);
    app.get('/logout', users.logout);
    app.post('/login', users.login);
    app.get('/users/json', users.getAll);
    app.get('/users/:id', users.get);
    app.get('/protectedRoute', users.protectedRoute)
    app.delete('/users/:id', users.delete);
};