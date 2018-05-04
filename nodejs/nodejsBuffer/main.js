const buf = Buffer.from('runoob','ascii');
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));

//创建一个长度为10、且用0填充的Buffer
const buf1 = Buffer.alloc(10);

//写入缓存区
//buf.write(string[,offset[,length]][,encoding])

var buf2 = Buffer.alloc(256);
var len = buf2.write('www.runoob.com');
console.log('写入字节数：'+ len);

//从缓存区读取数据
//buf.toString([encoding[,start[,end]]])
var buf3 = Buffer.alloc(26);
for (var i = 0; i < 26; i++) {
	buf3[i] = i + 97;
}
console.log(buf3.toString('ascii',0,5));
console.log(buf3.toString('utf8',0,5));

//将Buffer转换为JSON对象
//buf.toJSON()
const buf4 = Buffer.from([0x1,0x2,0x3,0x4,0x5]);
const json = JSON.stringify(buf);
console.log(json)
const copy = JSON.parse(json,(key,value)=>{
	return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
});

console.log(copy)

// Node缓冲区合并
var buffer1 = Buffer.from(('田平凡'));
var buffer2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log('buffer3内容：'+ buffer3.toString());

//缓冲区比较
//buf.compare(otherBuffer);
var buffer4 = Buffer.from('ABC');
var buffer5 = Buffer.from('ABCD');
var result = buffer4.compare(buffer5);
if(result < 0){
	console.log(buffer4 + '在' + buffer5 + '之前');
}else if(result == 0){
	console.log(buffer4 + '与' + buffer5 + '相同');
}else{
	console.log(buffer4 + '在' + buffer5 + '之后');
}

//拷贝缓冲区
//buf.copy(targetBuffer[,targetStart[,sourceStart[,sourceEnd]]])
var buffer6 = Buffer.from('abcdefghijkl');
var buffer7 = Buffer.from('Running');
buffer7.copy(buffer6,2);
console.log(buffer6.toString());

//缓冲区裁剪
//buf.slice([start[,end]])
var buffer8 = Buffer.from('runoob');
var buffer9 = buffer8.slice(0,2);
console.log('buffer9 content:'+ buffer9.toString());

//缓冲区长度
//buf.length
var buffer01 = Buffer.from('www.runood,com');
console.log('buffer01 length：' + buffer01.length);

