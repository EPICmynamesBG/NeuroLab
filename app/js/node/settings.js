const ElectronSettings = require('electron-settings');

var SettingsManager = function () {
  var electronSettings = new ElectronSettings();

  this.getSettings = function () {
    var currentSettings = electronSettings.get();
    if (Object.keys(currentSettings).length == 0 || currentSettings == null) {
      this.saveDefaultSettings();
      currentSettings = electronSettings.get();
    }
    return currentSettings;
  }

  this.saveDefaultSettings = function () {
    for (var key in SettingsManager.defaultSettings) {
      electronSettings.set(key, SettingsManager.defaultSettings[key]);
    }
  }

  this.saveSetting = function (key, value) {
    electronSettings.set(key, value);
    return electronSettings.get(key);
  }

  this.clearSettings = function () {
    electronSettings.clear();
  }

};

SettingsManager.defaultSettings = {
  "NG-RT": 58,
  "NG-z": 1
};