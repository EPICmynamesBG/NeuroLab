app.controller("MainController", function MainController($scope, $location, $rootScope) {

    $scope.openMenuItem = function(itemNumber){
        //1 = Goldman, 2 = Action-Potential, 3 = Summation
        $rootScope.backButtonVisible = true;
        if (itemNumber == 1){
            $location.path("/Goldman");
        } else if (itemNumber == 2){
            $location.path("/Action-Potential");
        } else {
            $location.path("/Summation-Accomodation");
        }
    }

});