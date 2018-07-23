// 原型
function Person(){

}
Person.prototype.name = 'Tian',
Person.prototype.age = 20,
Person.prototype.sayName = function(){
    console.log(this.name);
}
var person1 = new Person();
person1.sayName();
console.log(Person.prototype.isPrototypeOf(person1))
console.log(Object.getPrototypeOf(person1) == Person.prototype)
console.log(Object.getPrototypeOf(person1).name);

console.log(person1.hasOwnProperty('name'))
person1.name = 'uuu';
console.log(person1.hasOwnProperty('name'))
delete person1.name;
console.log(person1.hasOwnProperty('name'))

function hasPrototypeProperty(object,name){
    return !object.hasOwnProperty(name) && (name in object);
}
console.log(hasPrototypeProperty(person1,'name'))
for(var prop in person1){
    console.log(prop);
}
console.log(Object.keys(Person.prototype));//获取可枚举属性
console.log(Object.getOwnPropertyNames(Person.prototype))//获取所有属性