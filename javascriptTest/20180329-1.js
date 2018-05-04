var books = {}
Object.defineProperties(books,{
	name : {
		value : '汉语字典'
	},
	number : {
		value : 40
	},
	money : {
		value : 2550
	},
	_number : {
		get : function () {
			/* body... */
			return this.number
		},
		set : function (newvalue) {
			/* body... */
			if(newvalue > 30){
				this.number = newvalue;
				this.money = 300;
			}
		}
	}
})

var descriptor = Object.getOwnPropertyDescriptor(books,"number");
console.log(descriptor.value)
console.log(descriptor.configurable)

var descriptor1 = Object.getOwnPropertyDescriptor(books,"_number");
console.log(descriptor1.value)
console.log(typeof descriptor1.value)
console.log(typeof descriptor1.get)

