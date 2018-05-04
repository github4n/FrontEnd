var http = require('http');
var url = require('url');

function start(route,handle) {
    function onRequest(request,response) {
        var pathname = url.parse(request.url).pathname;
        console.log("请求地址"+pathname);
        route(handle,pathname,response);
    }
    http.createServer(onRequest).listen(8888);
    console.log("服务启动");
}

module.exports = {
    start : start
}