// nodejs Buffer缓冲区
// 创建一个长度为10、且用0填充的Buffer
const buf1 = Buffer.alloc(10);
// 创建一个长度为10、且用0x1填充的Buffer
const buf2 = Buffer.alloc(10,1);
const buf = Buffer.alloc(256);
const len = buf.write("www.runoob,com");
const buf3 = Buffer.alloc(26);
console.log('写入字节数：' + len);
for(let i = 0;i < 26;i++){
    buf3[i] = i + 97;
}
console.log(buf3.toString('ascii'));
console.log(buf3.toString('ascii',0,5));
console.log(buf3.toString('utf8',0,5));
console.log(buf3.toString(undefined,0,5));

const buf4 =  Buffer.from([0x1,0x2,0x3,0x4,0x5]);
const json = JSON.stringify(buf4);
console.log(json);
const copy = JSON.parse(json,(key,value)=>{
    return value && value.type === 'Buffer' ? Buffer.from(value.data) : value;
});
console.log(copy)
function execute(someFunction,value){
    someFunction(value);
}
execute(function(word){
    console.log(word);
},'Hello');