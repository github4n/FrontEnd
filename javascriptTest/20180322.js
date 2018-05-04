//g表示全局模式
//i表示不区分大小写
//m表示多行模式
var pattern1 = /at/g;

var re = null;

for (var i = 0; i < 10; i++) {
	re = /cat/g;
	re.test("catastrophe");
}

// console.log('\n')

for(var i = 0; i < 10; i++) {
	re = new RegExp("cat","g");
	// re.test("catastrophe");
	re.test("catastrophe");
}
//RegExp实例属性
var pattern1 = /\[bc\]at/i;
console.log(pattern1.global);//是否设置了g标示 全局查找
console.log(pattern1.ignoreCase);//是否设置了i标示 不区分大小写
console.log(pattern1.multiline);//是否多行匹配
console.log(pattern1.lastIndex);//标示开始搜索下一个匹配项的位置
console.log(pattern1.source);//正则的字符串表达方式

function patter(obj) {
	// body... 
	var matches = obj.patter.exec(obj.text);
	var flag = obj.patter.test(obj.text);
	console.log(matches);
	console.log(flag);
	console.log(obj.patter.toString())
}

patter({
	patter : new RegExp("a\(b\(c\)\?\)\?","gi"),
	text : "abc"
})

patter({
	patter : new RegExp("\[A-Z\]\+","g"),
	text : "ABA"
})

patter({
	patter : new RegExp("[0-9]+","g"),
	text : '012345'
})


patter({
	patter : new RegExp("\d{3}-\d{2}-\d{4}"),
	text : "000-00-0000"
})


function sum (a,b) {
	// body... 
	return a + b;
}

console.log(sum(5,5))

var anotherSum = sum;
sum = null;
console.log(anotherSum(6,6));

console.log(company(1,8));

// var company = function (a,b) {
// 	/* body... */
// 	return a * b;
// }

function company (a,b) {
	// body... 
	return a * b;
}

