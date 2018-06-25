{
	let a = 10;
	// a在代码块中有效
}
function Let() {
	var b = 10; 
}

var a = [];
// console.log(i)
for (let i = 0; i < 10; i++) {
	a[i] = function() {
		console.log(i)
	}
}
a[7]();

//设置循环变量的部分是父作用域,循环体内部是一个单独的子作用域
for (var j = 0; j < 10; j++) {
	let j = 'abc';
	console.log(j);
}
