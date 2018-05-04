var http = require('http');
http.createServer(function (request,response) {
    //发送HTTP头部 状态值200
    response.writeHead(200,{"Content-Type":"text/plain"});
    //发送响应数据
    response.end("Hello World");
}).listen(8888);

console.log("服务启动");