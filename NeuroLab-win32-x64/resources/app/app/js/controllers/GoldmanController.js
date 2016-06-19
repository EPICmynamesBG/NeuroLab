app.controller("GoldmanController", function GoldmanController($scope, $location, $rootScope, $http, $timeout) {
    $rootScope.currentFunction = "Nernst-Goldman Equations";
    require('./js/jquery/scroll-fix.js');

    $scope.NG_RT, $scope.z = '';

    var settingsManager = new SettingsManager();
    const BrowserWindow = require('electron').remote.BrowserWindow;
    var resultsWindow = null;

    function loadSettings() {
        var settings = settingsManager.getSettings();
        $scope.NG_RT = settings['NG-RT'];
        $scope.z = settings['NG-z'];
    }
    loadSettings();

    function showCalculatePopup() {
        var baseURL = 'file://' + __dirname + '/html/goldmanCalculation.html';
        resultsWindow = new BrowserWindow({
            width: 450,
            height: 450,
            show: false,
            alwaysOnTop:true,
            resizable: false
        });
        resultsWindow.on('closed', function () {
            console.log("Closed");
            resultsWindow.show = false;
            resultsWindow = null;
        });
        //url params: NG_RT, NG_z, KIn, KOut
        var parameters = "?NG_RT=" + $scope.NG_RT +
            "&NG_z=" + $scope.z +
            "&KIn=" + $scope.potassiumInside +
            "&KOut=" + $scope.potassiumOutside +
            "&NaIn=" + $scope.sodiumInside +
            "&NaOut=" + $scope.sodiumOutside +
            "&KPerm=" + $scope.potassiumPerm +
            "&NaPerm=" + $scope.sodiumPerm;

        parameters = encodeURI(parameters);

        resultsWindow.loadURL(baseURL + parameters);
        resultsWindow.show();
    }

    $scope.calculate = function () {
        if (resultsWindow == null) {
            showCalculatePopup();
        } else {
            resultsWindow.close();
            if (resultsWindow != null) {
                console.log("DESTROY");
                resultsWindow.destroy()
            }
            showCalculatePopup();
        }
    }

});