// dumo178's game maker DATA URI category script.
// licensed under BSD-3 clause license.

//defines the data uri category blocks.
Blockly.defineBlocksWithJsonArray([
  {
    type: "datauri_get",
    message0: "get Data URI from sprite %1",
    args0: [
      {
        type: "field_input",
        name: "SPRITENAME",
        text: "default",
      },
    ],
    output: null,
    tooltip: "Gets The data URI of a Sprite or audio.",
    helpUrl: "",
  },
]);

javascript.javascriptGenerator.forBlock["datauri_get"] = function (
  block,
  generator,
) {
  var text_spritename = block.getFieldValue("SPRITENAME");
  var code = `DGMOutputSprites.find(sprite => sprite[0] === '${text_spritename}')?.[1]`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
