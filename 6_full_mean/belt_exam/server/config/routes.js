var questions = require('../controllers/Questions.js');
var answers = require('../controllers/Answers.js');
var users = require('../controllers/Users.js');

module.exports = function(app){

    app.post('/users', users.register)
    app.post('/login', users.login)
    app.get('/logout', users.logout);

    /** 
     * Protected API
     * /
    /* products */

    app.use(userAuth);
    app.post('/questions', questions.post);
    app.post('/answers', answers.post);
    app.get('/questions', questions.getAll);
    app.get('/answers', answers.getAll);
    app.get('/questions/:id', questions.get);
    app.get('/answers/:id', answers.get);
    // app.put('/questions/up/:id', questions.upVote);
    // app.put('/questions/down/:id', questions.downVote);
}
function userAuth(req,res,next){
    if (req.session.user){
        next();
    }else{
        res.sendStatus(401);
    }
}