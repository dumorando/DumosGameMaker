//const { utils } = require("blockly");
// i cant use nodejs in electron :cry:
var workspace = Blockly.inject("EditorTab", {
  toolbox: DumosGameMakerToolbox,
  horizontalLayout: true,
  toolboxPosition: "start",
  renderer: "thrasos",
});

const theme = Blockly.Theme.defineTheme("DumosGameMaker", {
  base: Blockly.Themes.Zelos,
  componentStyles: { toolboxBackgroundColor: "#e6e6e6" },
  startHats: true,
});

workspace.setTheme(theme);
