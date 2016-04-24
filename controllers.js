var app = angular.module("myModule");

app.controller("fbIn", function($scope, fbService){
	var fbValue ="";
	$scope.fbInput = function (fbNum) {
		fbValue = $scope.fbNum;
		console.log(fbValue);
		fbService.getData(fbValue);
	}
	
});


app.controller("fbOut", function($scope, fbService){
	var newValue = fbService.sendData();
	console.log(newValue);
	if(newValue%3===0 && newValue%5===0) {
		$scope.fbOutput = "FizzBuzz!";
	} else if(newValue%3===0){
		$scope.fbOutput = "Fizz!";
	} else if(newValue%5===0){
		$scope.fbOutput = "Buzz!";
	} else {
		$scope.fbOutput = "Not Fizz or Buzz!";
	}
});
