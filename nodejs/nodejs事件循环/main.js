var fs = require('fs');
fs.readFile('input.txt',function(err,data) {
	console.log(err,data);
	//err为在读取文件时返回的错误信息
	//如没有发生错误，文件内容就通过回调函数输出
	if(err){
		console.log(err.stack);
		return;
	}
	console.log(data.toString());
});
console.log('程序执行完毕。');