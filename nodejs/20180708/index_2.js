// 非阻塞代码
var fs = require('fs');
fs.readFile('20180708/input.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log(data.toString());
});
console.log("程序执行结束");