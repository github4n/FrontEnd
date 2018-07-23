var fs = require('fs');
console.log('准备打开文件！');
fs.open('20180711/index_2/input.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log('文件打开成功！');
})