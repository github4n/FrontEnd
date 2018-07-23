var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();

fs.readFile('20180708/input.txt',
function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
    console.log("end");
    console.log("***********************");
});

eventEmitter.on('readFiles',function(){
    fs.readFile('20180708/input.txt',function(err,data){
        if(err){
            return console.error(err);
        }
        console.log(data.toString());
    })
}) 
eventEmitter.emit('readFiles');

