// dumo178's game maker COLLISION category script.
// licensed under BSD-3 clause license.

Blockly.defineBlocksWithJsonArray([
  {
    type: "collision_add_area",
    message0: "Add collision area to %1",
    args0: [
      {
        type: "field_variable",
        name: "GAMEOBJECT",
        variable: "gameobject",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 330,
    tooltip: "",
    helpUrl: "",
  },
  {
    type: "collision_grounded",
    message0: "is %1 grounded?",
    args0: [
      {
        type: "field_variable",
        name: "GAMEOBJECT",
        variable: "gameobject",
      },
    ],
    output: null,
    colour: 330,
    tooltip: "Checks if specified gameobject is on the floor or not",
    helpUrl: "",
  },
]);
javascript.javascriptGenerator.forBlock["collision_add_area"] = function (
  block,
  generator,
) {
  var variable_name = generator.nameDB_.getName(
    block.getFieldValue("GAMEOBJECT"),
    Blockly.Names.NameType.VARIABLE,
  );
  // TODO: Assemble javascript into code variable.
  var code = variable_name + ".use(area())\n";
  return code;
};
javascript.javascriptGenerator.forBlock["collision_grounded"] = function (
  block,
  generator,
) {
  var variable_name = generator.nameDB_.getName(
    block.getFieldValue("GAMEOBJECT"),
    Blockly.Names.NameType.VARIABLE,
  );
  // TODO: Assemble javascript into code variable.
  var code = variable_name + ".isGrounded()\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
