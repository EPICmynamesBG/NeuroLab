app.controller("ActionPotentialController", function ActionPotentialController($scope, $location, $rootScope) {
	$rootScope.currentFunction = "Action-Potential Calculator";

	require('./js/jquery/scroll-fix.js');

	var settingsManager = new SettingsManager();
	const BrowserWindow = require('electron').remote.BrowserWindow;
	var resultsWindow = null;

	//    function loadSettings() {
	//        var settings = settingsManager.getSettings();
	//    }
	//    loadSettings();

	function showGraphPopup() {
		var baseURL = 'file://' + __dirname + '/html/apGraph.html';
		resultsWindow = new BrowserWindow({
			minWidth: 450,
			minHeight: 450,
			width: 500,
			height: 500,
			show: false,
			alwaysOnTop: true
		});
		resultsWindow.on('closed', function () {
			console.log("Closed");
			resultsWindow.show = false;
			resultsWindow = null;
		});
		//url params: NG_RT, NG_z, KIn, KOut
		var parameters = "?memPot=" + $scope.memPotential +
			"&stim1Cur=" + $scope.stim1Current +
			"&stim1Dur=" + $scope.stim1Duration +
			"&stimDelay=" + $scope.stimDelay +
			"&stim2Cur=" + $scope.stim2Current +
			"&stim2Cur=" + $scope.stim2Duration;

		parameters = encodeURI(parameters);

		resultsWindow.loadURL(baseURL + parameters);
		resultsWindow.show();
	}

	$scope.graph = function () {
		if (resultsWindow == null) {
			showGraphPopup();
		} else {
			resultsWindow.close();
			if (resultsWindow != null) {
				console.log("DESTROY");
				resultsWindow.destroy()
			}
			showGraphPopup();
		}
	}
});