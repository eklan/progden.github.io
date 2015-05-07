(function(){
	define("defineFuncRtObj", function(){
		console.log("defineFuncRtObj loaded!");
		// this is a factory to build obj
		return {
			key: "value",
			key2: "value2",
			key3: function(){

			}
		};
	})
}).call({});