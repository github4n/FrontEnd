var book = {
    name : 'tian',
    age : 10
}
var {name,age} = book;

console.log(name,age)
function Year({year,month,day,hour=0,minute=0,second=0}){
    return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
}
console.log(Year({ year: 2017, month: 1, day: 1 }));