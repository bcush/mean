// here we load the Quote model that we created in the server.js page

var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

module.exports = function(app) {
// root route to render the index.ejs view
app.get('/', function(req, res) {
  res.render("index");
})

app.post('/quotes', function(req,res){
    quotes.create(req, res);
})

app.get('/main', function (req, res) {
    quotes.show(req, res);
})

}