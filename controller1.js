var app = angular.module("myModule");

app.controller("fbIn", function($scope, fbService){
	$scope.fbInput = function () {
		var fbValue = $scope.fbNum;
	}
});


app.controller("fbOut", function($scope, fbService){

});
