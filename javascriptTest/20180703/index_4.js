function Person(){

}
Person.prototype.name = 'Tian';
Person.prototype.age = 24;
Person.prototype.sayName = function(){
    console.log(this.name);
}
var person1 = new Person();
var person2 = new Person();
console.log(person1.sayName === person2.sayName);
console.log(Person.prototype.isPrototypeOf(person1));
console.log(Person.prototype.isPrototypeOf(person2));
console.log(Object.getPrototypeOf(person1) == Person.prototype);
console.log(Object.getPrototypeOf(person1).name);
console.log(person1.hasOwnProperty('name'))
console.log(('name' in person1) && (!person1.hasOwnProperty('name')));
person1.name = 'CCC';
for (const prop in person1) {
    if (person1.hasOwnProperty(prop)) {
        const element = person1[prop];
        console.log(element);
    }
}
var keys = Object.getOwnPropertyNames(Person.prototype);
console.log(keys);
