var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(request,response){
    //解析请求，包括文件名
    var pathname = __dirname +  url.parse(request.url).pathname;
    console.log('请求地址为：' + pathname);
    fs.readFile(pathname,function(err,data){
        if(err){
            console.error(err);
        }else{
            response.writeHead(200,{'Content-Type':'text/html'});

            response.write(data.toString());
        }
        response.end();
    });
}).listen(8000);
console.log('服务启动 http://127.0.0.1:8000');