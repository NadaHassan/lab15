var app = angular.module("myModule");

app.config(function($routeProvider){
  $routeProvider
  .when("/partial1",
  {
    controller: "fbIn",
    templateUrl: "partial1.html"

  })
  .when("/partial2",
  {
    controller: "fbOut",
    templateUrl: "partial2.html"

  })
  .when("/partial3",
  {
  	controller: "reddit",
  	templateUrl: "partial3.html"
  })
  .otherwise({redirectTo: "/"});
  });
