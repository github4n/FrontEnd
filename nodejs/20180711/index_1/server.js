var http = require('http');
var url = require('url');

function start(route){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log('请求的路径为：' + pathname);
        console.log(__filename,__dirname);
        //__filename当前文件名
        //__dirname当前目录
        route(pathname);

        response.writeHead(200,{'Content-Type':'text/plain'});
        response.write('Hello world');
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('服务启动');
}

exports.start = start;