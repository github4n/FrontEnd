var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event',function(arg1,arg2) {
	console.log('some_event事件触发。',arg1,arg2);
});
// setTimeout(() => {
//   event.emit('some_event','arg1参数','arg2参数');
// },1000)

event.addListener('some_event',function () {
	console.log('添加一个新事件');
})

event.once('some_event',function () {
	console.log('添加一次性监听器 ')
})

event.emit('some_event','arg1参数','arg2参数');

console.log(event.listeners('some_event'));
event.emit('error');