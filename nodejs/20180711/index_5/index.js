var http = require('http');
var fs = require('fs');
var url = require('url');

//创建服务器
http.createServer(function(request,response){
    //解析请求，包括文件名
    var pathname = __dirname + url.parse(request.url).pathname;
    //输出请求的文件名
    console.log('请求地址：'  + pathname);
    //从文件系统中读取请求的文件的内容
    fs.readFile(pathname,function(err,data){
        if(err){
            console.log(err);
            response.writeHead(404,{'Content-Type':'text/html'});
        }else{
            response.writeHead(200,{'Content-Type':'text/html'});
            //响应文件内容
            response.write(data.toString());
        }
        response.end();
    });
}).listen(3000);
console.log('服务启动 http://127.0.0.1:3000')