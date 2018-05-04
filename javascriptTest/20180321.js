function message (obj) {
	// body... 
	var output = '';
	if(typeof obj === 'object'){
		if(Object.getOwnPropertyNames(obj).length !== 0){		

			if(obj.hasOwnProperty('name')){
				output += "姓名：" + obj.name + '\n' 
			}else{
				output += "该对象没有姓名属性\n"
			}

			if(obj.hasOwnProperty('age')){
				output += "年龄：" + obj.age + '\n' 
			}else{
				output += "该对象没有年龄属性\n"
			}

		}else{
			output += '对象没有属性';
		}
	}else{
		output += '不是对象object';
	}
	console.log(output);
}

message({
	name : '田平凡',
	age : 12 
})

//顺序
function company_a (a , b) {
	// body... 
	return a - b; 
}
//倒序
function company_b (a , b) {
	// body... 
	return b - a; 
}
var array = [1,33,69,543,99,138,99,168,88];

array.sort(company_a);
console.log(array)

array.sort(company_b);
console.log(array)

var every = array.every(function (value,item,array) {
	/* body... */
	return typeof value === 'number'
})
console.log(every)

var filter = array.filter(function (value,item,array) {
	/* body... */
	return value > 62;
})
console.log(filter)

var map = array.map(function (value,item,array) {
	/* body... */
	return value + 1
})
console.log(map)

var reduce = array.reduce(function (pre,next,index,array) {
	/* body... */
	return pre + next
})
console.log(reduce)

function getNowDate(argument) {
	var data = new Date();
	var times = data.getTime();
	var hours = data.getHours();
	var minutes = data.getMinutes();
	var seconds = data.getSeconds();
	console.log("当前时间：" + hours + ':' + minutes + ":" + seconds);
}

var ms = 86399;
function Untime (argument) {
	
	var t_seconds = Math.floor(ms/60/60%24);
	var t_minutes = Math.floor(ms/60%60);
	var t_seconds = Math.floor(ms%60);
	ms-- ;
	console.log(t_seconds,t_minutes,t_seconds)
}


var flag = false;
if(flag){
	var timer = setInterval(function () {
		Untime();
	},1000);
}





