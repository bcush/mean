var users = require('../controllers/Users.js');

// Let's define our server side routes
module.exports = function(app) {
    app.post('/users', users.post);
    app.get('/users/json', users.getAll);
    app.get('/users/:id', users.get);
    app.delete('/users/:id', users.delete);
};