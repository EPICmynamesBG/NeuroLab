const electron = require('electron');
const shell = electron.shell;

function openExternal(link){
    shell.openExternal(link);
}