// dumo178's game maker TIME category script.
// licensed under BSD-3 clause license.

Blockly.defineBlocksWithJsonArray([
  {
    type: "time_waitforseconds",
    message0: "%1 %2 %3 %4 %5",
    args0: [
      {
        type: "field_label_serializable",
        name: "WAITFOR_INDICATOR",
        text: "after waiting for ",
      },
      {
        type: "input_value",
        name: "SECONDS_INPUT",
        check: "Number",
      },
      {
        type: "field_label_serializable",
        name: "SECONDS_INDICATOR",
        text: "seconds",
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "CODEAFTERSECONDS",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 160,
    tooltip: "Waits for an amount of seconds then executes specified blocks",
    helpUrl: "",
  },
  {
    type: "time_everyseconds",
    message0: "%1 %2 %3 %4 %5",
    args0: [
      {
        type: "field_label_serializable",
        name: "WAITFOR_INDICATOR",
        text: "every",
      },
      {
        type: "input_value",
        name: "SECONDS_INPUT",
        check: "Number",
      },
      {
        type: "field_label_serializable",
        name: "SECONDS_INDICATOR",
        text: "seconds",
      },
      {
        type: "input_dummy",
      },
      {
        type: "input_statement",
        name: "CODEAFTERSECONDS",
      },
    ],
    colour: 160,
    tooltip: "Waits for an amount of seconds then executes specified blocks",
    helpUrl: "",
  },
  {
    type: "time_timer",
    message0: "seconds since beginning",
    output: null,
    colour: 160,
    tooltip: "",
    helpUrl: "",
  },
]);
javascript.javascriptGenerator.forBlock["time_waitforseconds"] = function (
  block,
  generator,
) {
  var field_waitfor_indicator = block.getFieldValue("WAITFOR_INDICATOR");
  var value_seconds_input = generator.valueToCode(
    block,
    "SECONDS_INPUT",
    javascript.Order.ATOMIC,
  );
  var field_seconds_indicator = block.getFieldValue("SECONDS_INDICATOR");
  var statements_codeafterseconds = generator.statementToCode(
    block,
    "CODEAFTERSECONDS",
  );
  // TODO: Assemble javascript into code variable.
  var code = `wait(${value_seconds_input.toString()}, () => {\n${statements_codeafterseconds}\n})\n`;
  return code;
};

javascript.javascriptGenerator.forBlock["time_everyseconds"] = function (
  block,
  generator,
) {
  var field_waitfor_indicator = block.getFieldValue("WAITFOR_INDICATOR");
  var value_seconds_input = generator.valueToCode(
    block,
    "SECONDS_INPUT",
    javascript.Order.ATOMIC,
  );
  var field_seconds_indicator = block.getFieldValue("SECONDS_INDICATOR");
  var statements_codeafterseconds = generator.statementToCode(
    block,
    "CODEAFTERSECONDS",
  );
  // TODO: Assemble javascript into code variable.
  var code = `loop(${value_seconds_input.toString()}, () => {\n${statements_codeafterseconds}\n})\n`;
  return code;
};

javascript.javascriptGenerator.forBlock["time_timer"] = function (
  block,
  generator,
) {
  // TODO: Assemble javascript into code variable.
  var code = "time()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
