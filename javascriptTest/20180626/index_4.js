// rest参数
function foo (a,b) {
	// body... 
	var i,rest=[];
	if(arguments.length > 2){
		for (var i = 0; i < arguments.length; i++) {
			rest.push(arguments[i]);
		}
	}
	console.log('a=' + a);
	console.log('b=' + b);
	console.log(rest);
}
foo(1,2,3);

function foo1 (a,b,...rest) {
	// body... 
	console.log('a=' + a);
	console.log('n=' + b);
	console.log(rest);
}
foo1(1,2,3,4,5);

function sum (...rest) {

}

var i,args = [];
for(i = 1 ; i <= 100;i++){
	args.push(i);
}

if(sum() !== 0){
	console.log('测试失败：sum()=' + sum());
} else if(sum(1) !== 1){
	console.log('测试失败：sum(1)=' + sum(1));
} else if(sum(2,3) !== 5){
	console.log('测试失败：sum(2,3)=' + sum(2,3));
} else if(sum.apply(null,args) !== 5050){
	console.log('测试失败：sum(1,2,3,...,100)=' + sum.apply(null,args));
}else{
	console.log('测试通过')
}