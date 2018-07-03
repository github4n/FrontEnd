'use strict';
var person = {
    name : '田',
    birth : 1995,
    age : function(){
        var that = this;
        function getAgeFromBirth(){
            var y = new Date().getFullYear();
            return y - that.birth;
        }
        return getAgeFromBirth();
    }
}
console.log(person.age());