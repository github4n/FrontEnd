// console.log(sum(1,1));
function sum (a , b) {
	// body... 
	return a + b;
}
//函数声明提升

// var sum = function (a , b) {
// 	 body... 
// 	return a + b;
// }

//访问函数的指针 addTen , 执行函数 addTen()

function callFunction (functions,number) {
	// body... 
	return functions(number);
}

var addTen = function (number) {
	/* body... */
	return number + 10;
}
var numbers = callFunction(addTen,10);
// console.log(numbers);

function new_object (argument) {
	// body... 
	return function function_name (object1,object2) {
		// body... 
		var value1 = object1[argument];
		var value2 = object2[argument];
		if(value1 < value2){
			return -1;
		}else if(value1 > value2){
			return 1;
		}else{
			return 0;
		}
	}
}

var data = [{name:'TT',age:12},{name:'WWW',age:25},{name:'TOP',age:10}];
// data.sort(new_object("age"));
// console.log(data[0].name);

function sorts(argument) {
	// body... 
	return function sort_age (value1,value2) {
		// body... 
		if(value1[argument] < value2[argument]){
			return -1
		}else if(value1[argument] > value2[argument]){
			return 1
		}else{
			return 0
		}
	}
}


data.sort(sorts("age"));	
// console.log(data);

// function factorial(num){
// 	if(num <= 0){
// 		return 1;
// 	}else{
// 		return num * factorial(num - 1);
// 	}
// }

function factorial(number) {
	// body... 
	if(number <= 1){
		return 1;
	}else{
		return number * arguments.callee(number-1)
	}
}

// console.log(factorial(5));

function sum (a , b) {
	// body... 
	return a + b;
}

function callsum1 (a , b) {
	// body... 
	console.log(arguments)
	return sum.apply(this,arguments);
}

function callsum2 (a , b) {
	// body... 
	return sum.apply(this,[a,b]);
}

console.log(callsum1(5,5))
console.log(callsum2(6,65))

var color = 'blue';
var o = {color : "red"};
function colors () {
	// body... 
	console.log(this.color);
}

colors()
// colors.apply(o)
colors.bind(o)


