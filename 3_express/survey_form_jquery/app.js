var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var path = require("path");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './static')));
app.set('views', (path.join(__dirname, './views')));
app.set('view engine', 'ejs');
app.get('/', function(request, response) {
  response.render('index');
})
app.post('/submit', function(request, response) {
  console.log('POST DATA', request.body);
  response.render('results', request.body);
})

var port = 8000;
app.listen(port, function() {
  console.log("Listening on port", port);
});
