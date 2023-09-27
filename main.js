// Electron Functions
const path = require('path');
const { app, BrowserWindow, Menu } = require('electron');

const isDev = process.env.NODE_ENV !== 'production';
const isMac =  process.platform === 'darwin';

// Creat Main Window
const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    title: 'CWB Fire Value Calculator',
    width: isDev ? 1300 : 800,
    height: 600
  });

  // Open devtools if in dev env
  if(isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}

// App is Ready
app.whenReady().then(() => {
  createMainWindow();

  // Implement Menu
  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);


  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  } )
});

// Menu Template


// Calculator Functions -- Move to another file later
// Firing Characteristics -- Hold off for now until find good DB solution to import for the different games

// Fire Modifiers
const fireMods = new Array ();
fireMods["building"]=.50;
fireMods["dismounted"]=.75;
fireMods["disrupted"]=.50;
fireMods["moved"]=.50;

// Density Modifier
// const densityValue = new Array ();
// densityValue["unit1MenFiring"]="";
function densityMod() {
  // Get stackValue from the input element id "targetSize"
  const targetSizeInput = document.getElementById("targetSize");
  const stackValue = parseFloat(targetSizeInput.value);

  const maxStackValue = 1000;

  let result;

  
  if (stackValue / maxStackValue <= 0.67) {
    result = 1;
  } else if (stackValue / maxStackValue === 0.68) {
    result = 1.02;
  } else if (stackValue / maxStackValue === 0.69) {
    result = 1.03;
  } else if (stackValue / maxStackValue === 0.70) {
    result = 1.05;
  } else if (stackValue / maxStackValue === 0.71) {
    result = 1.06;
  } else if (stackValue / maxStackValue === 0.72) {
    result = 1.08;
  } else if (stackValue / maxStackValue === 0.73) {
    result = 1.09;
  } else if (stackValue / maxStackValue === 0.74) {
    result = 1.11;
  } else if (stackValue / maxStackValue === 0.75) {
    result = 1.12;
  } else if (stackValue / maxStackValue === 0.76) {
    result = 1.14;
  } else if (stackValue / maxStackValue === 0.77) {
    result = 1.15;
  } else if (stackValue / maxStackValue === 0.78) {
    result = 1.17;
  } else if (stackValue / maxStackValue === 0.79) {
    result = 1.18;
  } else if (stackValue / maxStackValue === 0.80) {
    result = 1.20;
  } else if (stackValue / maxStackValue === 0.81) {
    result = 1.21;
  } else if (stackValue / maxStackValue === 0.82) {
    result = 1.23;
  } else if (stackValue / maxStackValue === 0.83) {
    result = 1.24;
  } else if (stackValue / maxStackValue === 0.84) {
    result = 1.26;
  } else if (stackValue / maxStackValue === 0.85) {
    result = 1.27;
  } else if (stackValue / maxStackValue === 0.86) {
    result = 1.29;
  } else if (stackValue / maxStackValue === 0.87) {
    result = 1.30;
  } else if (stackValue / maxStackValue === 0.88) {
    result = 1.32;
  } else if (stackValue / maxStackValue === 0.89) {
    result = 1.33;
  } else if (stackValue / maxStackValue === 0.90) {
    result = 1.35;
  } else if (stackValue / maxStackValue === 0.91) {
    result = 1.36;
  } else if (stackValue / maxStackValue === 0.92) {
    result = 1.38;
  } else if (stackValue / maxStackValue === 0.93) {
    result = 1.39;
  } else if (stackValue / maxStackValue === 0.94) {
    result = 1.41;
  } else if (stackValue / maxStackValue === 0.95) {
    result = 1.42;
  } else if (stackValue / maxStackValue === 0.967) {
    result = 1.450;
  } else if (stackValue / maxStackValue === 0.97) {
    result = 1.45;
  } else if (stackValue / maxStackValue === 0.98) {
    result = 1.47;
  } else if (stackValue / maxStackValue === 0.99) {
    result = 1.48;
  } else {
    result = 1.5;
  }

  // Update the content of the output tag with id "densityModifier"
  document.getElementById("densityModifier").textContent = result;
}

// Attach an event listener to the input element to trigger the calculation when the input changes.
// const targetSizeInput = document.getElementById("targetSize");
// targetSizeInput.addEventListener("input", densityMod);

// Fatigue/Quality Modifiers
var qualMod = new Array ();
qualMod["qualityAB"]=.10;
qualMod["qualityC"]=0;
qualMod["qualityEF"]=-.10;

var fatMod = new Array ();
fatMod["fatigueLow"]=0;
fatMod["fatigueMed"]=-.10;
fatMod["fatigueHigh"]=-.20;
