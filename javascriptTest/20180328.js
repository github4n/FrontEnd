console.log(sum('1'));
function sum (a){
	// body... 
	return a;
}

var add = function (a,b){
	/* body... */
	return a + b;
}
console.log(add(1,8));

function index (action,a,b) {
	// body... 
	return action(a,b);
}
function mult(a,b) {
	// body... 
	return a * b;
}
console.log(index(mult,1,2))

function addSelf (num){
	// body... 
	if(num < 1){
		return 0;
	}else{
		return num + addSelf(num - 1);
	}
}
// console.log(addSelf(3));

function addSelf (num) {
	// body... 
	if(num < 1){
		return 0
	}else{
		return num + arguments.callee(num - 1);
	}
}
// console.log(addSelf(3))

var addSelf1 = addSelf;
addSelf = null;
console.log(addSelf1(3))

function out_name () {
	// body... 
	inner_name()
}
function inner_name () {
	// body... 
	console.log(arguments.callee.caller)
}
out_name()

function one (a , b) {
	// body... 
	return  a + b;
}


function two (a , b) {
	// body... 
	return one.apply(this,arguments)
}
console.log(two(1,2))

function three (a , b) {
	// body... 
	return one.call(this,a,b);
}
console.log(three(5,1,8))
var a = {color : 'blue'}
var b = {color : 'yellow'}
var c = {color : 'green'}
function con () {
	// body... 
	return this.color;
}
var con1 = con.bind(a)

console.log(con1())
console.log(con.call(b))
console.log(con.apply(c))


var number = 10.3;
console.log(number.toFixed(10))
console.log(number.toExponential(1))
console.log(number.toPrecision(3))

var strings = "strings";
var new_s = strings.concat('45')
console.log(new_s)
console.log(strings.slice(1,3))
console.log(strings.substring(1,3))
console.log(strings.substr(1,3))

