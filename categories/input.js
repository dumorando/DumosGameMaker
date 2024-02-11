// dumo178's game maker INPUT category script.
// licensed under BSD-3 clause license.

Blockly.defineBlocksWithJsonArray([
  {
    type: "input_keydown",
    message0: "key %1 held?",
    args0: [
      {
        type: "field_input",
        name: "KEY",
        text: "left",
      },
    ],
    output: null,
    colour: 65,
    tooltip: "Checks if a key is being held (Key down)",
    helpUrl: "",
  },
  {
    type: "input_keypressed",
    message0: "key %1 clicked?",
    args0: [
      {
        type: "field_input",
        name: "KEY",
        text: "left",
      },
    ],
    output: null,
    colour: 65,
    tooltip: "Checks if a key was clicked",
    helpUrl: "",
  },
  {
    type: "input_keyreleased",
    message0: "key %1 released?",
    args0: [
      {
        type: "field_input",
        name: "KEY",
        text: "left",
      },
    ],
    output: null,
    colour: 65,
    tooltip: "Checks if a key was released",
    helpUrl: "",
  },
  {
    type: "input_mousedown",
    message0: "mouse held?",
    output: null,
    colour: 65,
    tooltip: "Checks if the mouse is being held (Mouse down)",
    helpUrl: "",
  },
  {
    type: "input_mousepressed",
    message0: "mouse clicked?",
    output: null,
    colour: 65,
    tooltip: "Checks if the mouse was clicked",
    helpUrl: "",
  },
  {
    type: "input_mousereleased",
    message0: "mouse released?",
    output: null,
    colour: 65,
    tooltip: "Checks if the mouse was released",
    helpUrl: "",
  },
  {
    type: "input_mousepos",
    message0: "get mouse position as list",
    output: "Array",
    colour: 65,
    tooltip: "Gets the mouse position, then returns it as a List",
    helpUrl: "",
  },
]);

javascript.javascriptGenerator.forBlock["input_keydown"] = function (
  block,
  generator,
) {
  var text_key = block.getFieldValue("KEY");
  // TODO: Assemble javascript into code variable.
  var code = 'isKeyDown("' + text_key + '")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascript.javascriptGenerator.forBlock["input_keypressed"] = function (
  block,
  generator,
) {
  var text_key = block.getFieldValue("KEY");
  // TODO: Assemble javascript into code variable.
  var code = 'isKeyPressed("' + text_key + '")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascript.javascriptGenerator.forBlock["input_keyreleased"] = function (
  block,
  generator,
) {
  var text_key = block.getFieldValue("KEY");
  // TODO: Assemble javascript into code variable.
  var code = 'isKeyReleased("' + text_key + '")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascript.javascriptGenerator.forBlock["input_mousedown"] = function (
  block,
  generator,
) {
  var code = "isMouseDown()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascript.javascriptGenerator.forBlock["input_mousepressed"] = function (
  block,
  generator,
) {
  var code = "isMousePressed()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascript.javascriptGenerator.forBlock["input_mousereleased"] = function (
  block,
  generator,
) {
  var code = "isMouseReleased()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascript.javascriptGenerator.forBlock["input_mousepos"] = function (
  block,
  generator,
) {
  // TODO: Assemble javascript into code variable.
  var code = "[mousePos().x, mousePos().y]";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
