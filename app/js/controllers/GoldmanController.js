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
            //url params: ioArr, iiArr, z, base, pK, koArr, pNa, naoArr, kiArr, naiArr
            resultsWindow.loadURL('file://'+__dirname +'/html/goldmanCalculation.html?test=hello');
            resultsWindow.show();
        }
    }
});