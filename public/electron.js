const{app, BrowserWindow } = require('electron');
const{ipcMain} = require ('electron');
const url = require('url')
const path = require ('path');

function CreateMainWindow(){
    const mainWindow = new BrowserWindow({
        title: 'Pomodoro',
        width: 400,
        height: 400,
        frame: false,
        titleBarStyle: 'hidden',
        webPreferences: {
            preload: path.join(__dirname, "preload.js"), // Path to preload script
            contextIsolation: true,   // Keeps context isolated for security
            nodeIntegration: false,   // Disables Node.js in the renderer (security best practice)
        }
    });

    const startUrl = url.format({
        pathname:path.join(__dirname, '../build/index.html'), // El resultado (startUrl) será algo como: file:///C:/ruta/de/tu/proyecto/build/index.html para conectar la app 
        protocol: 'file',
        slashes:true,
    });
    
    if (process.platform === "darwin" && mainWindow.setWindowButtonVisibility) {
  mainWindow.setWindowButtonVisibility(false);
}


    mainWindow.setMenuBarVisibility(false);

    mainWindow.loadURL(startUrl); //Para subir la app en la pestaña del electron

    ipcMain.on('close-app', () =>{
        app.quit();
    } )
} 
app.whenReady().then(CreateMainWindow)