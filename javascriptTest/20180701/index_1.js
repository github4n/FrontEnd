var person = {
    name : 'value'
};
// Object.defineProperty(person,"name",{
//     configurable : true,
//     writable : false,
//     value : "tian"
// })
// console.log(person.name);
// delete person.name
// console.log(person.name)
console.log(Object.getOwnPropertyDescriptor(person,'name'));

var book = {
    _year : 2017 ,
    editor : 1
};

Object.defineProperty(book,'year',{
    get : function(){
        return 0;
    },
    set : function(newValue){
        if(newValue !== this._year){
            this._year = newValue;
            this.editor++;
        }
    }
});
console.log(Object.getOwnPropertyDescriptor(book,'year'));
console.log(book.year);
book.year = 2018;
console.log(book.year,book.editor,book._year);

var photo = {
    nums : 0, //初始数量为0
    money : 1000 //初始价格为1000
}

Object.defineProperties(photo,{
    numbers : {
        get : function(){
            return 0;
        },
        set : function(newValue){
            console.log(11)
            if(newValue > 10000){
                console.log(22)
                this.nums ++;
                this.money = 2000
            }
        }
    }
});
photo.numbers = 100001
console.log(Object.getOwnPropertyDescriptor(photo,"numbers"));
console.log(Object.getOwnPropertyDescriptor(photo,"nums"));
console.log(Object.getOwnPropertyDescriptor(photo,"money"));
console.log(photo.nums,photo.money)