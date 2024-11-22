const { app, BrowserWindow } = require('electron');
const path = require('path');


const createWindow = () => {
    const win = new BrowserWindow({
        icon: path.join(__dirname, './icon.png'),
        width: 800,
        height: 600
    });

    win.loadFile('./public/pages/index.html');
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})