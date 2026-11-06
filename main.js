const { app, BrowserWindow } = require('electron');

function crearVentana() {
  const ventana = new BrowserWindow({
    width: 900,
    height: 600,
    title: 'ZvonkLauncher',
    autoHideMenuBar: true,
    backgroundColor: '#0a0a0a'
  });
  ventana.loadFile('index.html');
}

app.whenReady().then(crearVentana);
