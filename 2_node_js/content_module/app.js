var http = require('http');
var fs = require('fs');
var static_contents = require('./static.js');

server = http.createServer(function (request, response){
  static_contents(request, response);
});

// var server = http.createServer(function (request, response){
//     console.log('client request URL: ', request.url);
//     // console.log(request)

//     if(request.url == '/cars') {
//         fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
//             response.writeHead(200, {'Content-Type': 'text/html'});
//             response.write(contents);
//             response.end();
//         });
//     }
    
// });

server.listen(6789);