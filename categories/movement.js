// dumo178's game maker ___ category script.
// licensed under BSD-3 clause license.

Blockly.defineBlocksWithJsonArray([
    {
        "type": "movement_gotoxy",
        "message0": "Move %1 to %2 X %3 Y %4 %5",
        "args0": [
          {
            "type": "field_variable",
            "name": "GAMEOBJECT",
            "variable": "gameobject"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "X",
            "align": "RIGHT"
          },
          {
            "type": "input_value",
            "name": "Y",
            "align": "RIGHT"
          },
          {
            "type": "input_end_row"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Move game object to a specified position.",
        "helpUrl": ""
      },
      {
        "type": "movement_movexy",
        "message0": "Move %1 by %2 X %3 Y %4 %5",
        "args0": [
          {
            "type": "field_variable",
            "name": "GAMEOBJECT",
            "variable": "gameobject"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "X",
            "align": "RIGHT"
          },
          {
            "type": "input_value",
            "name": "Y",
            "align": "RIGHT"
          },
          {
            "type": "input_end_row"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Move game object to a specified position.",
        "helpUrl": ""
      },
      {
        "type": "movement_xpos",
        "message0": "get x position of  %1",
        "args0": [
          {
            "type": "field_variable",
            "name": "GAMEOBJECT",
            "variable": "gameobject"
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "Gets X position of a Game Object",
        "helpUrl": ""
      },
      {
        "type": "movement_ypos",
        "message0": "get y position of  %1",
        "args0": [
          {
            "type": "field_variable",
            "name": "GAMEOBJECT",
            "variable": "gameobject"
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "Gets Y position of a Game Object",
        "helpUrl": ""
      }
]);

javascript.javascriptGenerator.forBlock['movement_gotoxy'] = function(block, generator) {
    var variable_name = generator.nameDB_.getName(
        block.getFieldValue("GAMEOBJECT"),
        Blockly.Names.NameType.VARIABLE,
      );
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    // TODO: Assemble javascript into code variable.
    var code = variable_name + '.moveTo(' + value_x.toString() + ', ' + value_y.toString() + ')\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['movement_xpos'] = function(block, generator) {
    var variable_name = generator.nameDB_.getName(
        block.getFieldValue("GAMEOBJECT"),
        Blockly.Names.NameType.VARIABLE,
      );
    // TODO: Assemble javascript into code variable.
    var code = variable_name + '.x';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.javascript.ORDER_NONE];
  };
  javascript.javascriptGenerator.forBlock['movement_ypos'] = function(block, generator) {
    var variable_name = generator.nameDB_.getName(
        block.getFieldValue("GAMEOBJECT"),
        Blockly.Names.NameType.VARIABLE,
      );
    // TODO: Assemble javascript into code variable.
    var code = variable_name + '.y';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.javascript.ORDER_NONE];
  };

  javascript.javascriptGenerator.forBlock['movement_movexy'] = function(block, generator) {
    var variable_name = generator.nameDB_.getName(
        block.getFieldValue("GAMEOBJECT"),
        Blockly.Names.NameType.VARIABLE,
      );
    var value_x = generator.valueToCode(block, 'X', javascript.Order.ATOMIC);
    var value_y = generator.valueToCode(block, 'Y', javascript.Order.ATOMIC);
    // TODO: Assemble javascript into code variable.
    var code = variable_name + '.move(' + value_x.toString() + ', ' + value_y.toString() + ')\n';
    return code;
  };