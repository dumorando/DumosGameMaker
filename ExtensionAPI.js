dgme = {};

function addBlock(blockConfig, categoryName) {
  var temptoolbox = DumosGameMakerToolbox;
}

function addCategory(categoryConfig) {
  var temptoolbox = DumosGameMakerToolbox;
  temptoolbox.contents.push(categoryConfig);
  updateToolbox(temptoolbox);
}

function updateToolbox(newToolbox) {
  DumosGameMakerToolbox = newToolbox;
  workspace.updateToolbox(newToolbox);
}

//exports
dgme.addCategory = addCategory;
dgme.addBlock = addBlock;
dgme.updateToolbox = updateToolbox;
