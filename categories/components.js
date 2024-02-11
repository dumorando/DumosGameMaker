// dumo178's game maker COMPONENTS main category script.
// licensed under BSD-3 clause license.

Blockly.defineBlocksWithJsonArray([
    {
        "type": "component_add",
        "message0": "add component %1 to %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "COMPONENT",
            "options": [
              [
                "position",
                "pos(50, 50)"
              ],
              [
                "scale",
                "scale(1)"
              ],
              [
                "opacity",
                "opacity(1)"
              ],
              [
                "timer",
                "timer()"
              ],
              [
                "fixed",
                "fixed()"
              ],
              [
                "text",
                "text(null)"
              ]
            ]
          },
          {
            "type": "field_variable",
            "name": "GAMEOBJECT",
            "variable": "gameobject"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#fc0303",
        "tooltip": "Adds a component to a gameobject",
        "helpUrl": ""
      },
      {
        "type": "component_modify",
        "message0": "modify component %1 on %2 with value %3 %4 %5",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "COMPONENT",
            "options": [
              [
                "scale",
                "scale"
              ],
              [
                "opacity",
                "opacity"
              ],
              [
                "text",
                "text"
              ]
            ]
          },
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
            "name": "VALUE"
          },
          {
            "type": "input_end_row"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Modifies a component in a game object",
        "helpUrl": ""
      }
]);

javascript.javascriptGenerator.forBlock['component_modify'] = function(block, generator) {
    var dropdown_component = block.getFieldValue('COMPONENT');
    var variable_name = generator.nameDB_.getName(
        block.getFieldValue("GAMEOBJECT"),
        Blockly.Names.NameType.VARIABLE,
      );
    var value_value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC);
    // TODO: Assemble javascript into code variable.
    var code = '...\n';
    return code;
  };