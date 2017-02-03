app.controller("GoldmanController", function GoldmanController($scope, $location, $rootScope, $http, $timeout) {
  require('./js/jquery/scroll-fix.js');

  // Base model for saving default values. Currently statics, may be
  // expanded in the future
  var settingsManager = new SettingsManager();

  // Electron process communicator
  // Handles menu bar item clicks
  const ipcRenderer = require('electron').ipcRenderer;
  // Used to throw open the results window
  const BrowserWindow = require('electron').remote.BrowserWindow;
  var resultsWindow = null;


  // Menu: Form > Calculate
  ipcRenderer.on('calculate', (event, message) => {
    $scope.calculate();
  });
  // Menu: Form > Clear
  ipcRenderer.on('clear', (event, message) => {
    $scope.clear();
    $scope.$digest();
  });

  // Update menubar enable/disable for calculate as form validity changes
  $scope.$watch('NG_form.$invalid', function (newValue) {
    ipcRenderer.send('setCalculate', !newValue);
  });
  // Update menubar enable/disable for reset as form validity changes
  $scope.$watch('NG_form.$pristine', function (newValue) {
    ipcRenderer.send('setClear', !newValue);
  });

  // Load default/saved settings
  function loadSettings() {
    var settings = settingsManager.getSettings();
    $scope.NG_RT = settings['NG-RT'];
    $scope.z = settings['NG-z'];
  }
  loadSettings();

  // Shows the calculate popup window
  function showCalculatePopup() {
    var baseURL = 'file://' + __dirname + '/html/goldmanCalculation.html';
    resultsWindow = new BrowserWindow({
      width: 450,
      height: 450,
      show: false,
      alwaysOnTop: true,
      resizable: false,
      icon: '../images/icon.ico'
    });
    resultsWindow.on('closed', function () {
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
    resultsWindow.setMenu(null);
    resultsWindow.show();
  }

  // Click event. Handles the calculate popup window, ensuring
  // more than one instance is not created
  $scope.calculate = function () {
    if (resultsWindow == null) {
      showCalculatePopup();
    } else {
      resultsWindow.close();
      if (resultsWindow != null) {
        resultsWindow.destroy()
      }
      showCalculatePopup();
    }
  }

  // Clears all the current input values
  $scope.clear = function () {
    $scope.NG_RT = null;
    $scope.z = null;
    $scope.potassiumInside = null;
    $scope.potassiumOutside = null;
    $scope.sodiumInside = null;
    $scope.sodiumOutside = null;
    $scope.potassiumPerm = null;
    $scope.sodiumPerm = null;
    $scope.NG_form.$setPristine();
    loadSettings();
  }

});