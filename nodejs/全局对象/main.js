console.log(__filename)
//当前正在执行的脚本的文件名
console.log(__dirname)
//当前执行脚本所在的目录
function printHello() {
    console.log("Hello World");
}
var t = setTimeout(printHello,2000);
//清除定时器
clearTimeout(t)

function printHello1() {
    console.log(printHello1,200)
}
var m = setInterval(printHello1,2000);

clearInterval(m)

