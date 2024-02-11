// dumo178's game maker GAME category script.
// licensed under BSD-3 clause license.

let color = "#03a5fc";
//defines the Game category blocks.
Blockly.defineBlocksWithJsonArray([
  {
    type: "game_on_tick",
    message0: "on every tick %1 %2",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "code",
      },
    ],
    inputsInline: true,
    colour: color,
    tooltip: "Runs every tick.",
    helpUrl:
      "https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame",
  },
  {
    type: "game_on_start",
    message0: "when website starts %1 %2",
    args0: [{ type: "input_dummy" }, { type: "input_statement", name: "code" }],
    inputsInline: true,
    colour: color,
    tooltip:
      "When the document is loaded. When this happens you should probably put a create game block.",
    helpUrl:
      "https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event",
  },
  {
    type: "game_scene",
    message0: "Scene %1 %2 %3",
    args0: [
      {
        type: "field_input",
        name: "SCENE",
        text: "main",
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "NAME",
      },
    ],
    colour: color,
    tooltip: "Creates a scene",
    helpUrl: "",
  },
  {
    type: "game_set_gravity",
    message0: "Set gravity %1",
    args0: [
      {
        type: "field_number",
        name: "GRAVITY",
        value: 2400,
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "Sets the gravity to the specified number. (Default: 2400)",
    helpUrl: "",
  },
  {
    type: "game_create_gameobject",
    message0: "Create game object %1 Sprite %2 Position %3 %4 %5 Rotation %6",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "SPRITE",
        check: "String",
        align: "RIGHT",
      },
      {
        type: "field_number",
        name: "XPOS",
        value: 0,
      },
      {
        type: "field_number",
        name: "YPOS",
        value: 0,
      },
      {
        type: "input_dummy",
        align: "RIGHT",
      },
      {
        type: "input_value",
        name: "ROTATION",
        check: "Number",
        align: "RIGHT",
      },
    ],
    output: null,
    colour: 230,
    tooltip: "Creates a game object.",
    helpUrl: "",
  },
  {
    type: "game_load_sprite",
    message0: "Load sprite %1 ID %2 Data URI %3",
    args0: [
      {
        type: "input_dummy",
      },
      {
        type: "input_value",
        name: "ID",
        check: "String",
        align: "RIGHT",
      },
      {
        type: "input_value",
        name: "URL",
        check: "String",
        align: "RIGHT",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "Load a sprite to be used in a game object.",
    helpUrl: "",
  },
  {
    type: "gameobject_jump",
    message0: "Make %1 jump",
    args0: [
      {
        type: "field_variable",
        name: "NAME",
        variable: "gameobject",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip:
      "Makes a game object JUMP. Does not check if grounded, only works if there is physics enabled on the game object.",
    helpUrl: "",
  },
  {
    type: "game_keypressed",
    message0: "On Key  %1 Pressed %2 %3",
    args0: [
      {
        type: "field_input",
        name: "KEY",
        text: "left",
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "NAME",
      },
    ],
    colour: color,
    tooltip: "Enter what the key is called in the box.",
    helpUrl: "",
  },
  {
    type: "game_deltatime",
    message0: "delta time",
    output: null,
    colour: 210,
    tooltip: "Returns the time since last frame.",
    helpUrl: "",
  },
  {
    type: "game_goscene",
    message0: "Go to scene %1",
    args0: [
      {
        type: "field_input",
        name: "SCENE",
        text: "main",
      },
    ],
    previousStatement: null,
    colour: 230,
    tooltip: "Changes scene to specified scene",
    helpUrl: "",
  },
]);

Blockly.JavaScript["game_on_tick"] = function (block) {
  var statements_code = Blockly.JavaScript.statementToCode(block, "code");
  var code = "onUpdate(() => {\n" + statements_code + "\n});";
  return code;
};

Blockly.JavaScript["game_on_start"] = function (block) {
  var statements_code = Blockly.JavaScript.statementToCode(block, "code");
  var code = `addEventListener("DOMContentLoaded", (event) => {\n${statements_code}\n});`;
  return code;
};

Blockly.JavaScript["game_set_gravity"] = function (block) {
  var number_gravity = block.getFieldValue("GRAVITY");
  var code = "setGravity(" + number_gravity.toString() + ")\n";
  return code;
};

javascript.javascriptGenerator.forBlock["game_create_gameobject"] = function (
  block,
  generator,
) {
  var value_sprite = generator.valueToCode(
    block,
    "SPRITE",
    javascript.Order.ATOMIC,
  );
  var value_physics = generator.valueToCode(
    block,
    "PHYSICS",
    javascript.Order.ATOMIC,
  );
  var value_collision = generator.valueToCode(
    block,
    "COLLISION",
    javascript.Order.ATOMIC,
  );
  var number_xpos = block.getFieldValue("XPOS");
  var number_ypos = block.getFieldValue("YPOS");
  var value_rotation = generator.valueToCode(
    block,
    "ROTATION",
    javascript.Order.ATOMIC,
  );
  // Initialize code variable with template string
  var code = `add([sprite(${value_sprite}),pos(${number_xpos.toString()}, ${number_ypos.toString()}),rotate(${value_rotation}),scale(1),REPLACEIFPHYSICSREPLACEIFCOLLISION])\n`;

  // Log value_physics and value_collision for debugging purposes
  console.log(value_physics);
  console.log(value_collision);

  // Replace placeholders based on conditions
  if (value_physics) {
    code = code.replace("REPLACEIFPHYSICS", "body(),");
  } else {
    code = code.replace("REPLACEIFPHYSICS", ""); // Remove placeholder if physics is false
  }

  if (value_collision) {
    code = code.replace("REPLACEIFCOLLISION", "area(),");
  } else {
    code = code.replace("REPLACEIFCOLLISION", "");
  }
  // Remove any trailing comma if it exists
  code = code.replace(/,\s*$/, "");
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascript.javascriptGenerator.forBlock["game_load_sprite"] = function (
  block,
  generator,
) {
  var value_id = generator.valueToCode(block, "ID", javascript.Order.ATOMIC);
  var value_url = generator.valueToCode(block, "URL", javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = "loadSprite(" + value_id + ", " + value_url + ")\n";
  return code;
};

javascript.javascriptGenerator.forBlock["gameobject_jump"] = function (
  block,
  generator,
) {
  var variable_name = generator.nameDB_.getName(
    block.getFieldValue("NAME"),
    Blockly.Names.NameType.VARIABLE,
  );

  // TODO: Assemble javascript into code variable.
  var code = variable_name + ".jump();\n";
  return code;
};

javascript.javascriptGenerator.forBlock["game_keypressed"] = function (
  block,
  generator,
) {
  var text_key = block.getFieldValue("KEY");
  var statements_name = generator.statementToCode(block, "NAME");
  // TODO: Assemble javascript into code variable.
  var code =
    'onKeyPress("' + text_key + '", () => {\n' + statements_name + "})\n";
  return code;
};

javascript.javascriptGenerator.forBlock["game_deltatime"] = function (
  block,
  generator,
) {
  // TODO: Assemble javascript into code variable.
  var code = "dt()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

javascript.javascriptGenerator.forBlock["game_scene"] = function (
  block,
  generator,
) {
  var text_scene = block.getFieldValue("SCENE");
  var statements_name = generator.statementToCode(block, "NAME");
  // TODO: Assemble javascript into code variable.
  var code =
    'scene("' + text_scene + '", () => {\n' + statements_name + "\n})\n";
  return code;
};

javascript.javascriptGenerator.forBlock["game_goscene"] = function (
  block,
  generator,
) {
  var text_scene = block.getFieldValue("SCENE");
  // TODO: Assemble javascript into code variable.
  var code = 'go("' + text_scene + '")\n';
  return code;
};
