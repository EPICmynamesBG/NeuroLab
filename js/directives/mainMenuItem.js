app.directive("menuItem", function EventDirective() {
    return {
        templateUrl: './html/directives/mainMenuItem.html',
		controller: "MainController",
        restrict: 'E',
        scope: {
            title: "=",
            description: "=",
            image: "="
        }, link: function (scope, element, attrs) {

        }
    };
});