(function(){
	define(function(){
		var data = "data here!!";
		var app  = angular.module('myApp', [])
			.controller('MyController', ["$scope", function($scope){
			   $scope.val = data;
			}]);
	});
}).call({});