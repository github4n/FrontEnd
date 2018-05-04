var buf = Buffer.from('runoob');
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));
console.log(buf.toString('utf16le'))
console.log(buf.toString('base64'))
console.log(buf.toString('binary'))
console.log(buf.toString('hex'))

//创建一个长度为10、且用0填充的Buffer
var buf1 = Buffer.alloc(10);

//创建一个长度为10、且用0x1填充的Buffer
var buf2 = Buffer.alloc(10,1);

//创建一个长度为10、且未初始化的Buffer
var buf3 = Buffer.allocUnsafe(10);

//创建一个包含[0x1,0x2,0x3]的Buffer
var buf4 = Buffer.from([1,2,3]);

//创建一个包含UTF-8字节的Buffer
var buf5 = Buffer.from('test');

//创建一个包含Latin-1字节的Buffer
var buf6 = Buffer.from('test','binary');

var length_ = buf1.write('www.baidu.com');
console.log('写入字节数：'+length_);

var buf7 = Buffer.alloc(26);

for (var i = 0; i < 26; i++) {
	buf7[i] = i + 97;
}

console.log(buf7.toString('ascii'));
var json = JSON.stringify(buf7);
console.log(json)
var buffer1 = Buffer.concat([buf6,buf7]);
console.log(buffer1.toString('ascii'))

//比较缓冲区
var buffer2 = Buffer.from('ABC');
var buffer3 = Buffer.from('ABCD');
var result = buffer2.compare(buffer3);

if(result < 0 ){
	console.log(buffer2 + '在' + buffer3 + '之前');
}else if(result == 0){
	console.log(buffer2 + '与' + buffer3 + '相同');
}else{
	console.log(buffer2 + '在' + buffer3 + '之后');	
}

var arrs = [1,5,109,3,91,5,9,4,3,6,7,12,98];
var person = [{
	name : '小林',
	age : 512,
	money : 100
},{
	name : '小李',
	age : 42,
	money : 100
},{
	name : '小红',
	age : 312,
	money : 100
}]
console.log(arrs.sort(function (a , b) {
	return a - b;
}))

console.log(person.sort(function (a , b) {
	return a.age - b.age;
}))

var buffer4 = Buffer.from('jkl');
var buffer5 = Buffer.from('RUNOOB');

buffer4.copy(buffer5,2);
console.log(buffer5.toString());

console.log(buffer5.slice(0,2).toString().length);
console.log(buffer5.slice(0,2).length);
