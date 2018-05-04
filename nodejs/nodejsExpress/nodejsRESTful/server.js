var express = require('express');
var app = express();
var fs = require('fs');

//添加新用户
var user = {
	"user4" : {
		"name" : "mohit",
      	"password" : "password4",
      	"profession" : "teacher",
      	"id": 4
	}
}

// app.get('/listUser',function (req,res) {
// 	//读取已存在的数据
// 	fs.readFile(__dirname + "/" + "user.json","utf8",function (err,data) {
// 		data = JSON.parse(data);
// 		data["user4"] = user["user4"];
// 		console.log(data);
// 		res.end(JSON.stringify(data));
// 	})
// })

//显示用户详情
// 根据id查找信息
// app.get('/:id',function (req,res) {
// 	fs.readFile(__dirname + "/" + "user.json","utf8",function (err,data) {
// 		data = JSON.parse(data);
// 		var user = data["user" + req.params.id];
// 		console.log(user);
// 		res.end(JSON.stringify(user));
// 	});
// })

//删除用户
var id = 2;
app.get('/deleteUser',function (req,res) {
	/* body... */
	fs.readFile(__dirname + "/" + "user.json","utf8",function (err,data) {
		/* body... */
		data  = JSON.parse(data);
		delete data["user" + 2];

		console.log(data);
		res.end(JSON.stringify(data));
	});
})



var server = app.listen(8081,'localhost',function () {
	/* body... */
	var host = server.address().address;
	var port = server.address().port;
	console.log('应用实例，地址为http://%s:%s',host,port);
})