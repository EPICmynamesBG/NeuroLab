const shell = require('electron').shell;

function openExternal(link){
    shell.openExternal(link);
}