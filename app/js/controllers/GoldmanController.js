app.controller("GoldmanController", function GoldmanController($scope, $location, $rootScope) {
    $rootScope.currentFunction = "Nernst-Goldman Equations";
    console.log();
    require('./js/jquery/scroll-fix.js');

    const BrowserWindow = require('electron').remote.BrowserWindow;
    var resultsWindow = null;

    $scope.calculate = function(){
        if (resultsWindow == null){
            resultsWindow = new BrowserWindow({ width: 400, height: 400, show: false });
            resultsWindow.on('closed', function() {
                resultsWindow.show = false;
                resultsWindow = null;
            });
            resultsWindow.loadURL('./html/about.html');
            resultsWindow.show();
        }
    }
});