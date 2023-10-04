// Electron Functions
const path = require("path");
const { app, BrowserWindow, Menu } = require("electron");

const isDev = process.env.NODE_ENV !== "production";
const isMac = process.platform === "darwin";

// Creat Main Window
const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    title: "CWB Fire Value Calculator 0.1.0",
    width: isDev ? 1300 : 800,
    height: 600,
  });

  // Open devtools if in dev env
  // if(isDev) {
  //   mainWindow.webContents.openDevTools();
  // }

  mainWindow.loadFile(path.join(__dirname, "./renderer/index.html"));
};

// Create about window
function createAboutWindow() {
  const aboutWindow = new BrowserWindow({
    title: "About CWB Fire Value Calculator 0.1.0",
    width: 300,
    height: 300,
  });

  aboutWindow.loadFile(path.join(__dirname, "./renderer/about.html"));
}

// App is Ready
app.whenReady().then(() => {
  createMainWindow();

  // Implement Menu
  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

//  Menu Template
const menu = [
  ...(isMac
    ? [
        {
          label: app.name,
          submenu: [
            {
              label: "About",
              click: createAboutWindow,
            },
          ],
        },
      ]
    : []),
  {
    role: "fileMenu",
  },
  ...(!isMac
    ? [
        {
          label: "Help",
          submenu: [
            {
              label: "About",
              click: createAboutWindow,
            },
          ],
        },
      ]
    : []),
];

app.on("window-all-closed", () => {
  if (!isMac) {
    app.quit();
  }
});
