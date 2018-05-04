//一个基础的HTTP服务器
var http = require('http');
var url = require('url');
//请求模块

function  start() {
    function onRequest(request,response) {
        var pathname = url.parse(request.url).pathname;
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("服务启动");
}

module.exports = {
    start : start
}
