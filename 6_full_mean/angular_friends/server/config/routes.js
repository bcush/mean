// It should require a routes.js file from “./server/config”. To confirm
// that the routes.js loads, have the routes.js console.log(‘future routes’).
// The routes.js file should export an empty function that has a
// parameter (app);

console.log('routes');

// var users = require('../controllers/Users.js');

// Let's define our server side routes
// This adds route listeners to friends for 5 of the 7 RESTful routes,
// excluding new and edit.
module.exports = function(app) {
    app.get('/friends', friends.index);
    app.get('/friends/:id', friends.show);
    app.post('/friends', friends.create);
    app.put('/friends/:id', friends.update);
    app.delete('/friends/:id', friends.delete);
};