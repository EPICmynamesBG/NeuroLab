var app = angular.module("app", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            controller: "MainController",
            templateUrl: "./html/main.html"
        })
        .when('/Goldman', {
            controller: "GoldmanController",
            templateUrl: "./html/goldman.html"
        })
        .when('/Action-Potential', {
            controller: "ActionPotentialController",
            templateUrl: "./html/actionPotential.html"
        })
        .when('/Summation-Accomodation', {
            controller: "SummationAccomodationController",
            templateUrl: "./html/summationAccomodation.html"
        })
        .when('/about', {
            controller: "AboutController",
            templateUrl: "./html/about.html"
        })
        .otherwise({
            redirectTo: "/"
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