const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const devtools = require('vue-devtools');

class Main {
  constructor(win, basePath = __dirname) {
    this.win = win;

    app.on('ready', () => {
      BrowserWindow.addDevToolsExtension(devtools.path);
      this.createWindow(basePath);
    });
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    })
    app.on('activate', () => {
      if (this.win === null) {
        this.createWindow(basePath);
      }
    })
  }

  createWindow(basePath = __dirname) {
    this.win = new BrowserWindow({
      width: 800,
      height: 500,
      backgroundColor: '#232323',
      title: 'Tonio: Management App'
    })
    this.win.loadURL(url.format({
      pathname: path.join(basePath, 'views/index.html'),
      protocol: 'file',
      slashes: true
    }))
    this.win.webContents.openDevTools();
    this.win.on('closed', () => this.win = null);
  }
}

module.exports = Main;