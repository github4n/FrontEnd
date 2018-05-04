var fs = require("fs");

var data = fs.readFileSync('input.txt');
console.log(data.toString()+"1");
console.log('程序结束');

fs.readFile('input.txt',function (err,data) {
	if(err){
		return console.error(err);
	}else{
		console.log(data.toString() +"2");
	}
})
console.log('程序结束1')
