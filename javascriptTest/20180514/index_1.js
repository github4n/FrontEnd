var sum = [0,2,5,9,9,10,99];
// var sums = sum.reduce(function (a,b) {
// 	// body...
// 	console.log(a,b);
// 	return  a + b; 
// },0);

var sums = sum.reduce((acc,cur) => acc + cur,0);

console.log(sums)

var names = ['Ali','Tom','TiMo','Ali'];
var countedNames = names.reduce(function (allnames,name){
	/* body... */
	// console.log(allnames,name);
	if(name in allnames){
		allnames[name]++;
	}else{
		allnames[name] = 1;
	}
	return allnames;
},{})

console.log(countedNames);

var arr = ['a','b','c','d','e'];
var arrs = arr.reduce(function(a,b) {
	/* body... */
	console.log(a,b);
	return a;
},'a')
console.log(arrs);

var places = ['XiAn','WuHan','YuLin','WeiNan'];
var arr_place = places.reduce(function(allplace,place) {
	/* body... */
	allplace[place] = 1;
	return allplace;
},{});
console.log(arr_place);