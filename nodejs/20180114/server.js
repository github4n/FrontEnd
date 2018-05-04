var http = require('http');
var url = require('url');
var fs = require('fs');

//创建服务器
http.createServer(function (request,response) {
    //解析请求，包括文件名
    var pathname = url.parse(request.url).pathname;
    //输出请求文件名
    console.log(pathname);
    fs.readFile(pathname.substr(1),function (err,data) {
        if(err){
            console.log(err);
            response.writeHead(404,{"Content-Type":"text/html"});
        }else{
            response.writeHead(200,{"Content-Type":"text/html"});
            //响应文件内容
            response.write(data.toString());
        }
        //发送响应数据
        response.end();
    });
}).listen(8881);

console.log('服务启动');