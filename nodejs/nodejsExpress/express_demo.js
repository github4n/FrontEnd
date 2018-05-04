var express = require('express');
var app = express();

//请求和响应
app.get('/',function (req,res) {
	/* body... */
	res.send('Hello world');
})

//自定义localhost
var server = app.listen(8081,'localhost',function () {
	/* body... */
	var host = server.address().address;
	var port = server.address().port;
	console.log('应用实例，访问地址为http://%s:%s',host,port);
})