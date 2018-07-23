function Person(name,age){
    this.name = name;
    this.age = age;
    this.sayName = function(){
        return this.name
    }
}
var person = new Person('Tian',20);
console.log(person.sayName())

var o = new Object();
Person.call(o,'UU',50);
console.log(o.sayName())
