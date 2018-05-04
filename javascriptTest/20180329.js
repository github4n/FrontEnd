var person = {
	name : 'TTT',
	age : 12,
	job : 'CXY',
	say : function() {
		/* body... */
		console.log(this.name)
	}
}

person.say()

// 数据属性
// 	 value 值
// 	 writale 是否修改属性的值
// 	 enumerable 是否通过for-in来循环属性
// 	 configurable 是否通过delete来删除属性

// Object.defineProperty(person,"name",{
// 	writable : true,
// 	value : 'NNN'
// })

// console.log(person.name)
// person.name = 'XXX';
// console.log(person.name)
console.log(person.age)

Object.defineProperty(person,"age",{
	getter : function() {
		/* body... */
		return this.age;
	},
	setter : function (newvalue) {
		/* body... */
		this.age = newvalue;
	}
})
person.age = 22
console.log(person.age,person.job);
console.log(person instanceof Object)
console.log(typeof person.age)

var friend = person;
console.log(typeof friend)
console.log(friend instanceof person)