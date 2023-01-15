const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile('src/index.html');

  ipcMain.on('toMain', (event, args) => {
    dialog.showMessageBoxSync(win, {
      message: args,
      type: 'question',
      title: 'Info',
    });
  });
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
