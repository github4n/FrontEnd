function getAge(){
    var y = new Date().getFullYear();
    return y - this.birth;
}
var person = {
    name:'田',
    birth:1995
}
// console.log(person.age());
console.log(getAge.apply(person,[]));