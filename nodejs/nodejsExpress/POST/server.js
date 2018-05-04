var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//创建application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({extended:false})

//设置静态文件
app.use(express.static('public'));

app.get('/index.html',function (req,res) {
	res.sendFile(__dirname + "/" + "index.html");
})

app.post('/process_post',urlencodedParser,function (req,res) {
	//输出JSON格式
	var response = {
		'name_1' : req.body.first_name,
		'name_2' : req.body.last_name 
	};

	console.log(response);
	res.end(JSON.stringify(response));
})

var server = app.listen(8081,'localhost',function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('应用实例，访问地址为http://%s:%s',host,port);
})