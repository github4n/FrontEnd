var fs = require("fs");
var data1 = "";
//创建可读流
var readerStream = fs.createReadStream('input.txt');
//设置编码utf-8
readerStream.setEncoding('UTF8');
//处理流事件
readerStream.on('data',function (chunk) {
	data1 += chunk;
});

readerStream.on('end',function () {
	console.log(data1);
})

readerStream.on('error',function (err) {
	console.log(err.stack);
})
console.log('程序执行完毕');

//写入
var data2 = "滴滴答答";
var writerStream = fs.createWriteStream('output.txt');
//使用utf-8
writerStream.write(data2,'UTF8');
//标记文件末尾
writerStream.end();
//处理流事件
writerStream.on('finish',function () {
	console.log('写入完成。');
});

writerStream.on('error',function (err) {
	console.log(err.stack);
});

console.log('程序执行完毕！');
