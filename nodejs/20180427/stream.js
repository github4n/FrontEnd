var fs = require("fs");
var data = "";
var data2 = "你的小青蛙是真的可爱。"

//读取流
var readStream = fs.createReadStream("input.txt");
//设置utf-8编码
readStream.setEncoding("UTF8");
//处理流事件
readStream.on("data",function(chunk) {
	data += chunk
})
readStream.on("end",function() {
	writeS(data);
})
readStream.on("error",function (err) {
	console.log(err.strck);
})
console.log('程序1执行完毕');

//2写入流
//创建可写流
var writeS = function dataS() {
	var writeStream = fs.createWriteStream("outInput.txt");
	//使用utf-8写入流
	writeStream.write(data2 + dataS , "UTF8");
	//标记文件末尾
	writeStream.end();
	//处理事件流
	writeStream.on("finish",function () {
		console.log('写入完成');
	})

	writeStream.on("error",function () {
		console.log(err.stack);
	})
	console.log('程序2执行完毕');
}

var a = 1;
var b = ['1','2'];
a =b;
console.log(a)
