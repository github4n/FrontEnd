var a = ['A','B','C'];
var s = new Set(['A','B','C']);
var m = new Map([[1,'x'],[2,'y'],[3,'z']]);
// for(var x of a){
// 	console.log(x)
// }
// for (var x of s) {
// 	console.log(x)
// }
// for (var x of m) {
// 	console.log(x[0] + '=' + x[1]);
// }
m.forEach((value,key,map) => {
  // Todo...
  console.log(value,key,map)
})