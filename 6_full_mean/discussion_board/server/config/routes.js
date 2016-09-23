var topics = require('../controllers/Topics.js');
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
    app.post('/topics', topics.post);
    app.get('/topics', topics.getAll);
    app.get('/topics/:id', topics.get);
    // app.put('/topics/up/:id', topics.upVote);
    // app.put('/topics/down/:id', topics.downVote);
}
function userAuth(req,res,next){
    if (req.session.user){
        next();
    }else{
        res.sendStatus(401);
    }
}