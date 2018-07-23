var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent',function(arg1,arg2){
    console.log('listener1',arg1,arg2);
});
emitter.on('someEvent',function(arg1,arg2){
    console.log('listener2',arg1,arg2);
});
//为指定事件添加一个监听器到监听器数组的尾部
emitter.addListener('someEvent',function(arg1,arg2){
    console.log('listener3',arg1,arg2);
})
//为指定事件注册一个监听器，接收一个字符串event和一个回调函数
emitter.once('someEvent',function(arg1,arg2){
    console.log('listener4',arg1,arg2);
})
console.log(emitter.listeners('someEvent'));

emitter.removeAllListeners('someEvent',function(){
    console.log('移除监听事件')
});
console.log(emitter.listeners('someEvent'));
emitter.emit('someEvent','arg1参数','arg2参数');
