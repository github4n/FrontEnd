function Person(){

}

Person.prototype = {
    name : 'Toi',
    age : 30,
    sayName : function(){
        console.log(this.name);
    }
}
Object.defineProperty(Person.prototype,'constructor',{
    enumerable : false,
    value : Person
})
var person1 = new Person();
console.log(person1.constructor == Person)
