function Person(name,age,job) {
	// body... 
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function() {
		/* body... */
		console.log(this.name)
	}
}

var person1 = new Person('TTT',20,'CXY');
console.log(person1.constructor === Person);
console.log(person1 instanceof Person)
console.log(person1 instanceof Object)

Person('WXW',0200,"DOCTOR");
var number = 015;
console.log(number.toString());
console.log(Number(15));
console.log(typeof number);