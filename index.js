var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        response.write('<h1>Hello World!</h1>');
        response.end();
    } else if (request.method === 'GET' && request.url === '/') {
    	fs.readFile('./index.html', 'utf-8', function(err, data) {
    		response.write(data);
    		response.end();
    	});
    } else {
        fs.readFile('./404.html', 'utf-8', function(err, data) {
          	response.statusCode = 404;
	   		response.write(data);
	   		response.end();
	   	});
    }
});

server.listen(8080);