//链式是通过连接输出流到另外一个流并创建多个流操作链的机制。
var fs = require("fs");
var zlib = require("zlib");

//压缩input.txt文件为input.txt.gz
// fs.createReadStream("input.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("input.txt.gz"));

//解压文件
fs.createReadStream("input.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("input.txt"));

console.log('文件压缩完成。');