// dumo178's game maker PHYSICS category script.
// licensed under BSD-3 clause license.

Blockly.defineBlocksWithJsonArray([
    {
        "type": "physics_add_body",
        "message0": "Add physics body to %1",
        "args0": [
          {
            "type": "field_variable",
            "name": "GAMEOBJECT",
            "variable": "gameobject"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#fc0303",
        "tooltip": "",
        "helpUrl": ""
      },
]);
javascript.javascriptGenerator.forBlock['physics_add_body'] = function(block, generator) {
    var variable_name = generator.nameDB_.getName(
        block.getFieldValue("GAMEOBJECT"),
        Blockly.Names.NameType.VARIABLE,
      );
    // TODO: Assemble javascript into code variable.
    var code = variable_name + '.use(body())\n';
    return code;
  };