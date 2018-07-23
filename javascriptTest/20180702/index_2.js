function Person(){

}
Person.prototype.name = 'Tian';
Person.prototype.age = 12;
Person.prototype.sayName = function(){
    console.log(this.name);
}

var person1 = new Person();
person1.sayName();
var person2 = new Person();
console.log(person1.sayName == person2.sayName)
console.log(Person.prototype.isPrototypeOf(person2));
console.log(Object.getPrototypeOf(person1).name)
