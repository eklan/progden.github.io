(function(){
	define("defineFuncRtFunc", function(){
		console.log("defineFuncRtFunc loaded!");
		// this is a factory to build obj
		return function(){
			return {"k":"v"};
		};
	})
}).call({});