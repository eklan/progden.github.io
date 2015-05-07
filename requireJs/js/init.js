var assetDir = "../",
	moduleDir = "../modules/";

requirejs.config({
	baseUrl: "../../js/",
	paths: {
		// assets
		angular: 	assetDir + 'angular.min',
		bootstrap: 	assetDir + 'bootstrap.min',
		jquery: 	assetDir + 'jquery-1.9.1.min',
		masonry: 	assetDir + 'masonry.pkgd.min',

		// modules
		defineProp: moduleDir + "defineProp",
		defineFuncRtObj: moduleDir + "defineFuncRtObj",
		defineFuncRtNothing: moduleDir + "defineFuncRtNothing",
		defineFuncRtFunc: moduleDir + "defineFuncRtFunc",
		// do not add file after this line!!!
	},
	shim: {
		bootstrap: {
			deps: ["jquery"]
		}
	}
});