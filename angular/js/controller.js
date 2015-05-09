(function(){
	define('ctrl1', function(){
		var data = "data in ctrl1!!";
		// var app  = angular.module('myApp')
		// 	.controller('ctrl1', ["$scope", function($scope){
		// 	   $scope.val = data;
		// 	}]);
		this.ctrl1  = function($scope){
		   $scope.val = data;
		};
	});
}).call(this);