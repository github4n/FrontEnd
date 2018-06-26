var m = new Map();//空map
m.set('Adam',67);
m.set('Bob',59);
console.log(m)
var flag = m.has('Adam');//是否存在key
console.log(flag)
var a = m.get('Adam');//67
m.delete('Adam');
m.get('Adam');
console.log(a)
m.set('Adam',1000);
var b = m.get('Adam');
console.log(b)
m.set('Adam');
console.log(m)

// SET
var s1 = new Set();//空set
var s2 = new Set([1,2,3]);// 1 ，2 ，3
// 重复的元素在set中自动被过滤
var s = new Set([1,2,3,3,'3']);
console.log(s)
s.add(4);
console.log(s)
s.add(5);
console.log(s)
s.delete(3)
console.log(s)
s.delete(3)
console.log(s)


