function abs(x) {
	if(x >= 0){
		return x;
	}else{
		return -x;
	}
}
// console.log(abs(1))
// function foo(x) {
// 	// body... 
// 	console.log('x =' + x);
// 	for(var i = 0;i < arguments.length; i++){
// 		console.log('arg' + i + '=' + arguments[i]);
// 	}
// }
// foo(10,20,30);
function foo(a,b,c) {
	// body... 
	if(arguments.length === 2){
		c = b;
		b = null;
	}
	for(var i = 0;i < arguments.length; i++){
		console.log('arg' + i + '=' + arguments[i]);
	}
}
foo(1,3);
