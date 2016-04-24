var app = angular.module("myModule");

app.directive("post", function(){
	return{
		restrict: "AE",
		template: "<h3>{{post.data.title}}</h3><img src='{{post.data.url}}' alt='Assume a cute picture is here'/><p>{{post.data.author}}</p>"
	};
});