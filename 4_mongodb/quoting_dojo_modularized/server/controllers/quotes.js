var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');
module.exports = {
    show: function(res, req) {
        Quote.find({}, function(err, quotes) {
            res.render('main', {quotes: quotes});
        })
    },

    create: function(res, req) {
        var quote = new Quote({name: req.body.name, quote: req.body.quote});
        quote.save(function(err) {
            if (err) {
                console.log("something went wrong");
            } else {
                res.redirect ('/');
            }
        })
    }
}