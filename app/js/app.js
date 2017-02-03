'use strict';
var app = angular.module("app", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/Goldman', {
      controller: "GoldmanController",
      templateUrl: "./html/goldman.html"
    })
    .otherwise({
      redirectTo: "/Goldman"
    });
});