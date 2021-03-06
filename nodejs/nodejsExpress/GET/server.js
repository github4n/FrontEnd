var express = require('express');
var app = express();
//设置静态文件
app.use(express.static('public'));

app.get('/index.html',function (req,res) {
	res.sendFile(__dirname + "/" + "index.html");
})

app.get('/process_get',function (req,res) {
	//输出JSON格式
	var response = {
		'name_1' : req.query.first_name,
		'name_2' : req.query.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

var server = app.listen(8081,'localhost',function () {
	/* body... */
	var host = server.address().address;
	var port = server.address().port;

	console.log('应用实例，访问地址为http://%s:%s',host,port);
})