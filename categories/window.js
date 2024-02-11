// dumo178's game maker WINDOW category script.
// licensed under BSD-3 clause license.

Blockly.defineBlocksWithJsonArray([
    {
        "type": "window_gameresolution",
        "message0": "get game resolution as list",
        "output": "Array",
        "colour": 20,
        "tooltip": "Returns the current game resolution as a List.",
        "helpUrl": ""
    },
    {
        "type": "window_center",
        "message0": "coordinates of center of game screen as list",
        "output": "Array",
        "colour": 20,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "window_focused",
        "message0": "is game focused?",
        "output": "Boolean",
        "colour": 20,
        "tooltip": "Checks if the game is focused",
        "helpUrl": ""
      },
      {
        "type": "window_touchscreen",
        "message0": "is game being played on touchscreen?",
        "output": "Boolean",
        "colour": 20,
        "tooltip": "Checks if the game is being played on a touchscreen device",
        "helpUrl": ""
      },
      {
        "type": "window_setfullscreen",
        "message0": "set full screen to %1",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME",
            "check": "Boolean"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 20,
        "tooltip": "Sets the game's full screen property to specified boolean",
        "helpUrl": ""
      },
      {
        "type": "window_fullscreen",
        "message0": "is fullscreen?",
        "output": "Boolean",
        "colour": 20,
        "tooltip": "Checks if the game is in fullscreen",
        "helpUrl": ""
      }
]);

javascript.javascriptGenerator.forBlock['window_gameresolution'] = function(block, generator) {
    // TODO: Assemble javascript into code variable.
    var code = '[width(), height()]';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  javascript.javascriptGenerator.forBlock['window_center'] = function(block, generator) {
    // TODO: Assemble javascript into code variable.
    var code = '[center().x, center().y]';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  javascript.javascriptGenerator.forBlock['window_focused'] = function(block, generator) {
    // TODO: Assemble javascript into code variable.
    var code = 'isFocused()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  javascript.javascriptGenerator.forBlock['window_touchscreen'] = function(block, generator) {
    // TODO: Assemble javascript into code variable.
    var code = 'isTouchscreen()'
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  javascript.javascriptGenerator.forBlock['window_setfullscreen'] = function(block, generator) {
    var value_name = generator.valueToCode(block, 'NAME', javascript.Order.ATOMIC);
    // TODO: Assemble javascript into code variable.
    var code = 'setFullscreen(' +value_name.toString()+ ')\n';
    return code;
  };

  javascript.javascriptGenerator.forBlock['window_fullscreen'] = function(block, generator) {
    // TODO: Assemble javascript into code variable.
    var code = 'isFullscreen()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };