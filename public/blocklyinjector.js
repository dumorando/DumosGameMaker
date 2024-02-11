//const { utils } = require("blockly");
// i cant use nodejs in electron :cry:
var workspace = Blockly.inject("EditorTab", {
  toolbox: DumosGameMakerToolbox,
  toolboxPosition: "right",
  renderer: "thrasos",
});

const theme = Blockly.Theme.defineTheme("DumosGameMaker", {
  base: Blockly.Themes.Zelos,
  startHats: true,
});

workspace.setTheme(theme);
