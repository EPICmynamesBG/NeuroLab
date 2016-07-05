/*
 * to use: cd  NeuroLab
 * to run: electron .
 * sass: sass --watch scss:styles
 * export Mac: electron-packager . --platform=darwin --icon=./icon.icns --arch=x64
 * export Windows: electron-packager . --platform=win32 --arch=x64
 */
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


//    ipcMain.on('asynchronous-message', (event, arg) => {
//        console.log(arg); // prints "ping"
//        event.sender.send('asynchronous-reply', 'pong');
//    });
//
//    ipcMain.on('synchronous-message', (event, arg) => {
//        console.log(arg); // prints "ping"
//        event.returnValue = 'pong';
//    });

    

    var windowOptions = {
        minWidth: 400,
        minHeight: 300,
        height: 750,
        width: 1000,
        icon: './icon.ico'
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
    
    mainWindow.loadURL('file://' + __dirname + '/app/index.html');

    //    mainWindow.webContents.openDevTools();


    mainWindow.on('closed', function () {
        mainWindow = null;
    });

});

app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    //    if (process.platform != 'darwin'){
    //
    //    }
    app.quit();
});