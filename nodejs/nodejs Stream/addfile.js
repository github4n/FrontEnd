var fs = require('fs');
var data = '';
var data2 = '你的小可爱';
//创建可读流
var readStream = fs.createReadStream('input1.txt');
readStream.setEncoding('UTF8');

readStream.on('data',function (chunk) {
    data += chunk;
})

readStream.on('end',function () {
    writeS(data);
});
readStream.on('error',function (err) {
    console.log(err.strck);
})

console.log('程序1执行完毕');

//写入流
var writeS = function dataS() {
    var writeStream = fs.createWriteStream('out.txt');
    writeStream.write(data2+dataS,'UTF8');

    writeStream.end();

    writeStream.on('finish',function () {
        console.log('写入完成');
    })
    writeStream.on('error',function (err) {
        console.log(err.stack);
    })
    console.log('程序2执行完毕')
}