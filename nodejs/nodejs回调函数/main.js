
//阻塞代码

var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log('程序执行结束！');

//非阻塞阻塞代码

var fs = require('fs');
fs.readFile('input.txt',function (err,data) {
	/* body... */
	if(err) return console.error(err);
	console.log(data.toString());
});
console.log('程序执行结束！');