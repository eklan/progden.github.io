requirejs.config({
	baseUrl: "../js",
	paths: {
		angular: 'angular.min',
		bootstrap: 'bootstrap.min',
		jquery: 'jquery-1.9.1.min',
		masonry: 'masonry.pkgd.min'
	},
	shim: {
		bootstrap: {
			deps: ["jquery"]
		}
	}
});

requirejs(["angular", "bootstrap"], function(angular, bootstrap) {

});