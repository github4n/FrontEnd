//加载http模块
var http = require('http');
var url = require('url');

function start (route,handle) {
	function onRequest (requset,response) {
		var pathname = url.parse(requset.url).pathname;
		console.log('Request for ' + pathname + 'received.');

		route(handle,pathname,response);

		// route(handle,pathname);

		//发送HTTP状态200和HTTP头的内容类型（content-type）
		// response.writeHead(200,{"Content-Type":"text/plain"});
		// var content = route(handle,pathname);
		// response.write(content);
		// response.write("Hello World");
		//完成响应
		// response.end();
	}
	http.createServer(onRequest).listen(8881);
	console.log('Server has started');
}

module.exports = {
	start : start
}


