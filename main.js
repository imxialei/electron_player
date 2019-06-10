const {app, BrowserWindow, Notification, Menu} = require('electron')
const fs = require('fs')
const log = console.log.bind(console)
const createWindow = function() {

    mainWindow = new BrowserWindow({
        width: 330,
        height: 480,
        // transparent: true,
        // frame: false,
        webPreferences: {
            nodeIntegrationInWorker: true,
        },
    })

    // mainWindow.setMenu(null)
    mainWindow.loadFile('index.html')
    mainWindow.on('close', function() {
        mainWindow = null
    })

    /*隐藏electron创听的菜单栏*/
    // Menu.setApplicationMenu(null)

    let notification = new Notification()
    notification.show()
}

const loadMainWindow = function() {
    let mainWindow
    // let Menu = electron.Menu

    app.on('ready', createWindow)

    app.on('window-all-closed', function() {
        app.quit()
    })
}

const loadRootFiles = function() {
    fs.readdir('.', (err, files) => {
        log('typeof', typeof err, err)
        if (err !== null) {
            log(err)
        } else {
            log('files', files)
        }})
    log('load 运行')
}

const test = function() {
}

const __main = function() {
    loadMainWindow()
    loadRootFiles()
}

__main()
