app.controller("GoldmanController", function GoldmanController($scope, $location, $rootScope, $http) {
    $rootScope.currentFunction = "Nernst-Goldman Equations";
    require('./js/jquery/scroll-fix.js');

    $scope.NG_RT, $scope.z = '';

    var settingsManager = new SettingsManager();
    const BrowserWindow = require('electron').remote.BrowserWindow;
    var resultsWindow = null;

    function loadSettings(){
        var settings = settingsManager.getSettings();
        $scope.NG_RT = settings['NG-RT'];
        $scope.z = settings['NG-z'];
    }
    loadSettings();


    $scope.calculate = function () {
        if (resultsWindow == null) {
            resultsWindow = new BrowserWindow({
                width: 400,
                height: 400,
                show: false
            });
            resultsWindow.on('closed', function () {
                resultsWindow.show = false;
                resultsWindow = null;
            });
            //url params: ioArr, iiArr, z, base, pK, koArr, pNa, naoArr, kiArr, naiArr
            resultsWindow.loadURL('file://' + __dirname + '/html/goldmanCalculation.html?test=hello');
            resultsWindow.show();
        }
    }
});