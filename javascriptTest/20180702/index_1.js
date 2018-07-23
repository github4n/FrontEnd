var person = {}
Object.defineProperties(person,{
    name : {
        value : 'tian'
    },
    age : {
        value : 100
    },
    num : {
        get : function(){
            return 0;
        },
        set : function(newValue){
            if(newValue > 10){
                this.age++;
            }
        }
    }
})
var descriptor = Object.getOwnPropertyDescriptor(person,'num');
console.log(descriptor);