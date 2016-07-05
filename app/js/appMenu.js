const ipcMain = require("electron").ipcMain;

var appMenuDefiner = function (mainWindow) {


    var self = this;
    var aboutWindow = null;
    
    self.enableCalculate = false;
    self.enableClear = false;

    self.showAboutScreen = function () {
        const BrowserWindow = require('electron').BrowserWindow;
        if (self.aboutWindow == null) {
            var windowOptions = {
                minWidth: 200,
                minHeight: 200,
                height: 200,
                width: 200,
                maxHeight: 300,
                maxWidth: 300,
                show: false,
                minimizable: false,
                maximizable: false
            }
            self.aboutWindow = new BrowserWindow(windowOptions);
            self.aboutWindow.on('closed', function () {
                self.aboutWindow.show = false;
                self.aboutWindow = null;
            });
            self.aboutWindow.loadURL('file://' + __dirname + '/app/html/about.html');
            self.aboutWindow.show();
        }
    }

    self.getAppMenuTemplate = function (Menu, app) {
        var name = "NeuroLab";
        var template = [
            {
                label: 'Edit',
                submenu: [
                    {
                        label: 'Undo',
                        accelerator: 'CmdOrCtrl+Z',
                        role: 'undo'
              },
                    {
                        label: 'Redo',
                        accelerator: 'Shift+CmdOrCtrl+Z',
                        role: 'redo'
              },
                    {
                        type: 'separator'
              },
                    {
                        label: 'Cut',
                        accelerator: 'CmdOrCtrl+X',
                        role: 'cut'
              },
                    {
                        label: 'Copy',
                        accelerator: 'CmdOrCtrl+C',
                        role: 'copy'
              },
                    {
                        label: 'Paste',
                        accelerator: 'CmdOrCtrl+V',
                        role: 'paste'
              },
                    {
                        label: 'Select All',
                        accelerator: 'CmdOrCtrl+A',
                        role: 'selectall'
              },
            ]
          },
            {
                label: 'View',
                submenu: [
                    {
                        label: 'Reload',
                        accelerator: 'CmdOrCtrl+R',
                        click: function (item, focusedWindow) {
                            if (focusedWindow)
                                focusedWindow.reload();
                        }
              },
                    {
                        label: 'Toggle Full Screen',
                        accelerator: (function () {
                            if (process.platform == 'darwin')
                                return 'Ctrl+Command+F';
                            else
                                return 'F11';
                        })(),
                        click: function (item, focusedWindow) {
                            if (focusedWindow)
                                focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
                        }
              }, {
                        label: 'Toggle Developer Tools',
                        accelerator: (function () {
                            if (process.platform == 'darwin')
                                return 'Alt+Command+I';
                            else
                                return 'Ctrl+Shift+I';
                        })(),
                        click: function (item, focusedWindow) {
                            if (focusedWindow)
                                focusedWindow.toggleDevTools();
                        },
                        enabled: true
              }
            ]
          },
            {
                label: 'Form',
                submenu: [
                    {
                        label: 'Calculate',
                        accelerator: 'CmdOrCtrl+Enter',
                        click: function () {
                            mainWindow.webContents.send("calculate", null);
                        },
                        enabled: self.enableCalculate
                  }, {
                        label: 'Clear',
                        accelerator: 'CmdOrCtrl+Esc',
                        click: function () {
                            mainWindow.webContents.send("clear", null);
                        },
                      enabled: self.enableClear
              }
            ]
          },
            {
                label: 'Window',
                role: 'window',
                submenu: [
                    {
                        label: 'Minimize',
                        accelerator: 'CmdOrCtrl+M',
                        role: 'minimize'
              },
                    {
                        label: 'Close',
                        accelerator: 'CmdOrCtrl+W',
                        role: 'close'
              },
            ]
          }
        ];

        if (process.platform == 'darwin') {
            template.unshift({
                label: name,
                submenu: [
                    {
                        label: 'About ' + name,
                        //                        role: 'about'
                        click: function () {
                            self.showAboutScreen();
                        }
              },
                    {
                        type: 'separator'
              },
                    {
                        label: 'Services',
                        role: 'services',
                        submenu: []
              },
                    {
                        type: 'separator'
              },
                    {
                        label: 'Hide ' + name,
                        accelerator: 'Command+H',
                        role: 'hide'
              },
                    {
                        label: 'Hide Others',
                        accelerator: 'Command+Alt+H',
                        role: 'hideothers'
              },
                    {
                        label: 'Show All',
                        role: 'unhide'
              },
                    {
                        type: 'separator'
              },
                    {
                        label: 'Quit',
                        accelerator: 'Command+Q',
                        click: function () {
                            app.quit();
                        }
              }
            ]
            });
            // Window menu
            template[(template.length - 1)].submenu.push({
                type: 'separator'
            }, {
                label: 'Bring All to Front',
                role: 'front'
            });
        } else {
            template.push({
                label: 'Help',
                role: 'help',
                submenu: [
                    {
                        label: 'About ' + name,
                        role: 'about'
                            //click: self.showAboutScreen();
              }
            ]
            });
        }
        return Menu.buildFromTemplate(template);
    }



}

module.exports = appMenuDefiner;