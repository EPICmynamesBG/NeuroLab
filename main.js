/*
 * to use: cd  PhysiLab
 * to run: electron .
 * sass: sass --watch scss:styles
 *
 */
'use strict';

const electron = require('electron');

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

var Menu = require('menu');
var appMenuDefiner = require('./app/js/appMenu.js');
var amDefiner = new appMenuDefiner();
var menu = amDefiner.getAppMenuTemplate(Menu, app);

app.on('ready', function () {

    Menu.setApplicationMenu(menu);

    var windowOptions = {
        minWidth: 400,
        minHeight: 300,
        height: 600,
        width: 800
    }

    mainWindow = new BrowserWindow(windowOptions);

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');

    mainWindow.webContents.openDevTools();


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