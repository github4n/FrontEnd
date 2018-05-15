var arr_1 = ['Ali','Tom','TiMo','Ali','Tom'];
var arrs_1 = arr_1.reduce(function (a,b) {
	/* body... */
	if(b in a){
		a[b]++;
	}else{
		a[b] = 1;
	}
    return a;
},{})
console.log(arrs_1);

var person = [{
	name:'TTT',
	age:12
},{
	name:'YYY',
	age:87
},{
	name:'GGG',
	age:46
}];
var persons = person.sort(function(val1,val2) {
	/* body... */
	var value1 = val1['age'];
	var value2 = val2['age'];
	return value1 - value2;
})
console.log(persons)

var new_per = person.reduce(function (array,obj) {
	/* body... */
	var ages = obj['age'];
	if(!array[ages]){
		array[ages] = [];
	}
	array[ages].push(obj);
	// console.log(array,obj['age'],obj);
	return array;
},{});
console.log(new_per);

var shops = [{name:'WWW',num:100},{name:'RRR',num:124},{name:'GHG',num:96}];
var totalNum = shops.reduce(function (acc,cur) {
	console.log(acc,cur['num']);
	return acc + cur['num'];
},0);
console.log(totalNum);


var infos = [{name:'神奇女侠',bys:'DC漫画'},{name:'托尼·斯塔克',bys:'漫威'},{name:'史蒂夫·罗杰斯',bys:'漫威'},{name:'蜘蛛侠',bys:'漫威'},{name:'奇异博士',bys:'漫威'},{name:'银河护卫队',bys:'漫威'},{name:'蝙蝠侠',bys:'DC漫画'},{name:'超人',bys:'DC漫画'}];

var info_fen = infos.reduce(function (array,obj,index) {
	/* body... */
	var key = obj['bys'];
	if(!array[key]){
		array[key] = [];
	}
	array[key].push(obj);
	return array;
},{});
console.log(info_fen);

var arr_2 = [1,2,3,9,4,1,3,6,4,1,1,2,3,6,9];
var arrs_2 =[];
for (var i = 0; i < arr_2.length; i++) {
	if(arrs_2.indexOf(arr_2[i]) == -1){
		arrs_2.push(arr_2[i]);
	}
}
console.log(arrs_2);

var arrs_reduce = arr_2.reduce(function (acc,cur) {
	/* body... */
	var acc_length = acc.length;
	if(acc_length == 0 || acc.indexOf(cur) === -1){
		acc.push(cur)
	}
	return acc;
},[]);
console.log(arrs_reduce);
