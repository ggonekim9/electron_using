const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        // webPreferences: {
        //     preload: path.join(__dirname, 'preload.js')
        // },
    })
    win.webContents.openDevTools()
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})
