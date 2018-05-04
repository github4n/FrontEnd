function route(pathname) {
	console.log('请求' + pathname + "路由");
}

//输出文件所在位置的绝对路径
function filename () {
	console.log(__filename);
}

//当前执行脚本所在的目录
function dirname () {
	console.log(__dirname);
}

module.exports = {
	route : route,
	filename:filename,
	dirname:dirname
}