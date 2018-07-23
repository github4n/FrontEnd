function Person(){

}
Person.prototype = {
    name : 'tian',
    age : 29,
    job : "前端",
    sayName : function(){
        console.log(this.name);
    }
}
console.log(Person.prototype);
console.log(Object.getPrototypeOf(new Person));
