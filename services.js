var app = angular.module("myModule");

app.factory("fbService", function(){
	var fbData = {};

	return {
		getData: function(val){
			fbData = val;
		}, 
		sendData: function() {
			return fbData;
		}

	};
});