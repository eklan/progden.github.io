(function(){
	define('ctrl2', function(){
		var data = "data in ctrl2!!";
		var app  = angular.module('myApp', [])
			.controller('ctrl2', ["$scope", function($scope){
			   $scope.val = data;
			}]);
	});
}).call({});