const { app, BrowserWindow } = require('electron')

let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  // load test.webrtc.org
  mainWindow.loadURL('https://test.webrtc.org/')

  mainWindow.on('closed', () => {
    mainWindow = null;
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  app.quit()
})