// Require some of the controllers we will use
var questions = require('../controllers/Questions.js');
var users = require('../controllers/Users.js');

// What is module.exports?
// By default, JavaScript doesn’t have a way to pass information between
// different files. module.exports is Node’s way of fixing this problem.
// You can think of module.exports as a giant object for our application. When
// our application starts, this module.exports object looks like this:

// module.exports = {};

// As we start pulling things into our app with require(), everything is added
// to this object. So now as we add that new config.js file with
// require(./config.js);, we have access to those variables since we passed them
// through module.exports. This is how we will be passing information to and
// from all of our files and we’ll see this in practice again when we create
// our routes files. It is also important to note that many tutorials on the
// web will switch between module.exports and exports. They mean the same thing
// and can be used interchangeably.

module.exports = function(app) {

  // These will be our unprotected routes
  app.post('/register', users.register);
  app.post('/login', users.login);

  // These will be our protected routes
  app.use(userAuth);
  app.post('/questions', questions.ask);
  app.post('/questions/:id', questions.getOne);
  app.get('/questions', questions.getAll);
};

// This is our function that checks for user session
function userAuth(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}
