// var products = require('../controllers/Products.js');
// var users = require('../controllers/Users.js');

// module.exports = function(app){

//     app.post('/users', users.register)
//     app.post('/login', users.login)
//     /** 
//      * Protected API
//      * /
//     /* products */

//     app.use(userAuth);
//     app.post('/products', products.post);
//     app.get('/products', products.getAll);
//     app.get('/products/:id', products.get);
//     app.delete('/products/:id', products.delete);
//     app.put('/products/:id', products.buy);
// }
// function userAuth(req,res,next){
//     if (req.session.user){
//         next();
//     }else{
//         res.sendStatus(401);
//     }
// }