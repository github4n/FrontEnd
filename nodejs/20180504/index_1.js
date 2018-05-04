var http = require('http');
var events = require('events');
var eventEmitter = new events.EventEmitter();

// http.createServer(function (request,response) {
// 	response.writeHead(200,{"Content-Type":"plain"});
// 	response.end('Hello World');
// }).listen(8888);
// console.log('服务启动')

var listener1 = function() {
	console.log('listener1');
}

eventEmitter.on('connection',listener1);
eventEmitter.emit('connection');
// var buf = Buffer.from('runoob','ascii')
// console.log(buf.toString('hex'))

var buf = Buffer.alloc(256);
var len = buf.write('www.runoob.com');
var json = JSON.stringify(buf);
console.log('写入字节数：'+len);
console.log(buf.toString('utf8',0,5));
console.log(json)
console.log(__filename);
console.log(__dirname);
setTimeout(() => {
  console.log('132')
}, 1000)


console.info('程序开始执行');
var counter = 10;
console.log('计数：%d',counter);
console.time("获取数据");
console.timeEnd("获取数据");
console.info("程序执行完毕。")