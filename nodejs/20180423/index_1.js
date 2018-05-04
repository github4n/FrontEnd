var http = require('http');

http.createServer(function (request,response) {
	/* body... */
	response.writeHead(200,{"Content-Type":"text/pain"});
	response.end('Hello World!');
}).listen(8888);
console.log('server start');