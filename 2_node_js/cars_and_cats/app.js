var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);

    if(request.url == '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

    else if (request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

    else if (request.url === '/cars/new') {
        fs.readFile('./views/cars_form.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/images/car1.jpeg'){
        fs.readFile('./images/car1.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/images/car2.jpeg'){
        fs.readFile('./images/car2.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/images/cat1.jpeg'){
        fs.readFile('./images/cat1.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });
    }

    else if(request.url === '/images/cat2.jpeg'){
        fs.readFile('./images/car2.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            response.write(contents);
            response.end();
        });
    }

});

server.listen(6789);