'use strict';

const electron = require('electron');

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

var mainWindow = null;

const Menu = electron.Menu;
var appMenuDefiner = require('./app/js/appMenu.js');
var amDefinerInstance = null;

var updateMenu = function(enableCalculate, enableClear) {
    
    if (enableCalculate != null) {
        amDefinerInstance.enableCalculate = enableCalculate;
    }
    if (enableClear != null) {
        amDefinerInstance.enableClear = enableClear;
    }
    var menu = amDefinerInstance.getAppMenuTemplate(Menu, app);
    Menu.setApplicationMenu(menu);
}

app.on('ready', function () {

    var windowOptions = {
        minWidth: 400,
        minHeight: 300,
        height: 750,
        width: 1000,
        icon: './app/images/icon.ico',
        show: false,
        backgroundColor: '#F5F1E9'
    }

    mainWindow = new BrowserWindow(windowOptions);
    
    amDefinerInstance = new appMenuDefiner(mainWindow);
    
    
    updateMenu(null, null);

    ipcMain.on('setCalculate', (event, arg) => {
        updateMenu(arg, null);
    });
    
    ipcMain.on('setClear', (event, arg) => {
        updateMenu(null, arg);
    });

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
    
    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
    mainWindow.show();
  
    //Enable to see Dev tools
    mainWindow.webContents.openDevTools()

});

app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    // However, we don't want this behavior
    //    if (process.platform != 'darwin'){
    //
    //    }
    app.quit();
});