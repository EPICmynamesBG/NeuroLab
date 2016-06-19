var app = angular.module("app", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/Goldman', {
            controller: "GoldmanController",
            templateUrl: "./html/goldman.html"
        })
//        .when('/about', {
//            controller: "AboutController",
//            templateUrl: "./html/about.html"
//        })
        .otherwise({
            redirectTo: "/Goldman"
        });
});

app.run(function($rootScope, $location, $window, $timeout){
    $rootScope.backButtonVisible = false;
    $rootScope.currentFunction = "";

    $rootScope.back = function(){
        $window.history.back();
        //used to wait fro $apply to finish
        $timeout(function(){
            if ($location.path() == "/"){
                $rootScope.backButtonVisible = false;
            }
        }, 2);

    }
});