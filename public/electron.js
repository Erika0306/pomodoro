const{app, BrowserWindow } = require('electron');
const url = require('url')
const path = require ('path');
const { title } = require('process');

function CreateMainWindow(){
    const mainWindow = new BrowserWindow({
        title: 'Pomodoro',
        width: 400,
        height: 430,
    });

    const startUrl = url.format({
        pathname:path.join(__dirname, '../build/index.html'), // El resultado (startUrl) será algo como: file:///C:/ruta/de/tu/proyecto/build/index.html para conectar la app 
        protocol: 'file',
        slashes:true,
    });

    mainWindow.loadURL(startUrl); //Para subir la app en la pestaña del electron
} 
app.whenReady().then(CreateMainWindow)