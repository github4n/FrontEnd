// nodejs事件模型 events

var events = require('events');
var eventEmitter = new events.EventEmitter();
//继承eventEmitter

var listener1 = function listener1(arg1,arg2) {
	console.log('listener1,' + arg1 + ',' + arg2);
}

var listener2 = function () {
	console.log('listener2');
}

var listener3 = function () {
	console.log('listener3');
}

eventEmitter.on('some_thing',listener1);
eventEmitter.addListener('some_thing',listener2);
eventEmitter.once('some_thing',listener3);

eventEmitter.removeListener('some_thing',listener1);

eventEmitter.emit('some_thing','姓名','年龄');
var functions = eventEmitter.listeners('some_thing');
var numbers = eventEmitter.listenerCount('some_thing')

eventEmitter.newListener('some_thing',function(){
	console.log('添加一个事件成功');
});

console.log(functions,numbers);



