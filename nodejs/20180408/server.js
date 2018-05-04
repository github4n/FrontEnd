//使用require指令来载入http模块，并将实例化的http赋值给变量http
var http  = require("http");
//使用http.createServer()方法创建服务器，使用listen方法绑定8888端口
http.createServer(function (request,response) {
	/* body... */
	//发送HTTP头部
	//HTTP状态值 200
	//内容类型 text/plain
	response.writeHead(200,{'Content-Type':'text/plain'});

	//发送响应数据
	response.end('Hello World\n');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/')