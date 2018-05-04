var util = require('util');
function Base() {
	this.name = "base";
	this.base = 1991;
	this.sayHello = function() {
		console.log('Hello' + this.name);
	};
}

Base.prototype.showName = function(){
	console.log(this.name);
};

function Sub() {
	this.name = 'sub';
}


//通过inherits实现继承
util.inherits(Sub,Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
console.log(objSub);

function Person() {
	this.name = "byvide";
	this.toString = function() {
		return this.name;
	};
}

var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true));

//判断数组
console.log(util.isArray([]));

//判断正则
console.log(util.isRegExp(/some regexp/));

//判断日期
console.log(util.isDate(new Date()));

//判断错误
console.log(util.isError(new Error()));

//异步读取数据
var fs = require('fs');
//异步读取
fs.readFile("input.txt",function(err,data) {
	if(err){
		return console.error(err);
	}
	console.log('异步读取：' + data.toString());
})

//打开文件
fs.open("input.txt","r+",function(err,fd){
	if(err){
		return console.error(err);
	}
	console.log('文件打开成功！');
})

//获取文件信息
fs.stat("E:/NoGameNoLife/nodejs/20180427/input.txt",function(err,stats) {
	console.log(stats.isFile());
})


//准备打开信息
fs.stat('E:/NoGameNoLife/nodejs/20180427/',function(err,stats){
	if(err){
		return console.error(err);
	}
	console.log(stats);
	console.log('读取文件信息成功');

	//检测文件类型
	console.log('是否为文件(isFile)?' + stats.isFile());
	console.log('是否为目录(isDirectory)?' + stats.isDirectory());
});

//写入数据
console.log('准备写入数据');
fs.writeFile("outInput.txt","我是通过fs.writeFile写入的",function(err) {
	if(err){
		return console.error();
	}
	console.log('数据写入成功');
	console.log('-----我是分割线-----');
	console.log('读取写入的数据！');
	fs.readFile("outInput.txt",function (err,data) {
		if(err){
			return console.error(err);
		}
		console.log('异步读取文件数据：' + data.toString());
	})
})

//读取文件
var buf = new Buffer(1024);

console.log('准备打开已存在的文件！');
fs.open("input.txt","r+",function(err,fd) {
	if(err){
		return console.error(err);
	}
	console.log('文件打开成功');
	console.log('准备读取文件');
	fs.read(fd,buf,0,buf.length,0,function(err,bytes){
		if(err){
			console.log(err);
		}
		console.log(bytes + "字节被读取");

		//仅输出读取的字节
		if(bytes > 0){
			console.log(buf.slice(0,bytes).toString());
		}
	})
})