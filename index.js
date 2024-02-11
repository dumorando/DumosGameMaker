const { app, BrowserWindow, dialog } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });

  //win.removeMenu();
  win.loadFile("index.html");

  win.on("close", function (e) {
    const choice = dialog.showMessageBoxSync(win, {
      type: "question",
      buttons: ["Leave", "Stay"],
      defaultId: 0,
      message: "Are you sure you want to leave? Unsaved Data Will Be Lost!",
    });

    if (choice === 1) {
      e.preventDefault();
    }
  });
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
