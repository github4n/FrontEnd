var fs = require('fs');

var readFileStream = fs.createReadStream('text/input1.txt');
var writeStream = fs.createWriteStream('text/output1.txt');
readFileStream.pipe(writeStream);
