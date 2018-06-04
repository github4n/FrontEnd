// const promise = new Promise(function(resolve,reject){
// 	if(){
// 		resolve(value);
// 	}else{
// 		reject(error);
// 	}
// });

function timeout(ms) {
	// body... 
	return new Promise(function(resolve,reject) {
		/* body... */
		setTimeout(resolve, ms,'done');
	});
}



timeout(100).then((value)=>{
	console.log(value);
});