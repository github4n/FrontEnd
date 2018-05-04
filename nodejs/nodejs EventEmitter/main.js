var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event',function (arg1,arg2) {
	/* body... */
	console.log('some_event事件触发',arg1,arg2);
});

setTimeout(() => {
  // Todo...
  event.emit('some_event','arg1参数','arg2参数');
},1000);

//addListener(event,listener)为指定事件添加一个监听器到监听器数组的尾部
//on(event,listener) 指定事件注册一个监听器
//once(event,listener) 指定事件注册一个单次监听器
//removeListener(event,listener)移除指定事件的某个监听器，必须注册过
//removeAllListener([event])移除所有事件
//setMaxListeners(n)提高监听器的默认限制的数量
//listeners(event)返回指定事件的监听器数组
//emit(event,[arg1],[arg2]) 按照参数的顺序执行每个监听器

