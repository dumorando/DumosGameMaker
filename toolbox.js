/*
to add to Types category
        {
          type: "colour_picker",
          kind: "block",
          fields: {
            COLOUR: "#ff0000",
          },
        },
        {
          type: "text",
          kind: "block",
          fields: {
            TEXT: "",
          },
        },
        {
          type: "text_multiline",
          kind: "block",
          fields: {
            TEXT: "",
          },
        },
        {
          type: "math_number",
          kind: "block",
          fields: {
            NUM: 0,
          },
        },
        {
          type: "lists_create_with",
          kind: "block",
        },
*/

const DumosGameMakerToolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "search",
      name: "Search",
      contents: [],
    },
    {
      kind: "category",
      name: "Control",
      colour: "#03fc0b",
      contents: [
        {
          type: "controls_if",
          kind: "block",
        },
        {
          type: "controls_repeat_ext",
          kind: "block",
          inputs: {
            TIMES: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 10,
                },
              },
            },
          },
        },
        {
          type: "controls_whileUntil",
          kind: "block",
          fields: {
            MODE: "WHILE",
          },
        },
        {
          type: "controls_for",
          kind: "block",
          fields: {
            VAR: {
              name: "i",
            },
          },
          inputs: {
            FROM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            TO: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 10,
                },
              },
            },
            BY: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          type: "controls_forEach",
          kind: "block",
          fields: {
            VAR: {
              name: "j",
            },
          },
        },
      ],
    },
    {
      kind: "category",
      name: "Types",
      colour: "#f57e42",
      contents: [
        {
          type: "colour_picker",
          kind: "block",
          fields: {
            COLOUR: "#ff0000",
          },
        },
        {
          type: "text",
          kind: "block",
          fields: {
            TEXT: "",
          },
        },
        {
          type: "text_multiline",
          kind: "block",
          fields: {
            TEXT: "",
          },
        },
        {
          type: "math_number",
          kind: "block",
          fields: {
            NUM: 0,
          },
        },
        {
          type: "lists_create_with",
          kind: "block",
        },
        {
          type: "logic_boolean",
          kind: "block",
          fields: {
            BOOL: "TRUE",
          },
        },
      ],
    },
    {
      kind: "category",
      name: "Operations",
      colour: "#5a03fc",
      contents: [
        {
          type: "logic_compare",
          kind: "block",
          fields: {
            OP: "EQ",
          },
        },
        {
          type: "logic_operation",
          kind: "block",
          fields: {
            OP: "AND",
          },
        },
        {
          type: "logic_negate",
          kind: "block",
        },
        {
          type: "logic_null",
          kind: "block",
          enabled: false,
        },
        {
          type: "logic_ternary",
          kind: "block",
        },
        {
          type: "colour_random",
          kind: "block",
        },
        {
          type: "colour_rgb",
          kind: "block",
          inputs: {
            RED: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
            GREEN: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 50,
                },
              },
            },
            BLUE: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          type: "colour_blend",
          kind: "block",
          inputs: {
            COLOUR1: {
              shadow: {
                type: "colour_picker",
                fields: {
                  COLOUR: "#ff0000",
                },
              },
            },
            COLOUR2: {
              shadow: {
                type: "colour_picker",
                fields: {
                  COLOUR: "#3333ff",
                },
              },
            },
            RATIO: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0.5,
                },
              },
            },
          },
        },

        {
          type: "text_join",
          kind: "block",
        },
        {
          type: "text_append",
          kind: "block",
          fields: {
            name: "item",
          },
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
          },
        },
        {
          type: "text_length",
          kind: "block",
          inputs: {
            VALUE: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          type: "text_isEmpty",
          kind: "block",
          inputs: {
            VALUE: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
          },
        },
        {
          type: "text_indexOf",
          kind: "block",
          fields: {
            END: "FIRST",
          },
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
                fields: {
                  VAR: {
                    name: "text",
                  },
                },
              },
            },
            FIND: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          type: "text_charAt",
          kind: "block",
          fields: {
            WHERE: "FROM_START",
          },
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
                fields: {
                  VAR: {
                    name: "text",
                  },
                },
              },
            },
          },
        },
        {
          type: "text_getSubstring",
          kind: "block",
          fields: {
            WHERE1: "FROM_START",
            WHERE2: "FROM_START",
          },
          inputs: {
            STRING: {
              block: {
                type: "variables_get",
                fields: {
                  VAR: {
                    name: "text",
                  },
                },
              },
            },
          },
        },
        {
          type: "text_changeCase",
          kind: "block",
          fields: {
            CASE: "UPPERCASE",
          },
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          type: "text_trim",
          kind: "block",
          fields: {
            MODE: "BOTH",
          },
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          type: "text_count",
          kind: "block",
          inputs: {
            SUB: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
          },
        },
        {
          type: "text_replace",
          kind: "block",
          inputs: {
            FROM: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
            TO: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
          },
        },
        {
          type: "text_reverse",
          kind: "block",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
          },
        },

        {
          type: "text_print",
          kind: "block",
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          type: "text_prompt_ext",
          kind: "block",
          fields: {
            TYPE: "TEXT",
          },
          inputs: {
            TEXT: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "abc",
                },
              },
            },
          },
        },
        {
          type: "math_arithmetic",
          kind: "block",
          fields: {
            OP: "ADD",
          },
          inputs: {
            A: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            B: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
        {
          type: "math_single",
          kind: "block",
          fields: {
            OP: "ROOT",
          },
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 9,
                },
              },
            },
          },
        },
        {
          type: "math_trig",
          kind: "block",
          fields: {
            OP: "SIN",
          },
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 45,
                },
              },
            },
          },
        },
        {
          type: "math_constant",
          kind: "block",
          fields: {
            CONSTANT: "PI",
          },
        },
        {
          type: "math_number_property",
          kind: "block",
          fields: {
            PROPERTY: "EVEN",
          },
          inputs: {
            NUMBER_TO_CHECK: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          type: "math_round",
          kind: "block",
          fields: {
            OP: "ROUND",
          },
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 3.1,
                },
              },
            },
          },
        },
        {
          type: "math_on_list",
          kind: "block",
          fields: {
            OP: "SUM",
          },
        },
        {
          type: "math_modulo",
          kind: "block",
          inputs: {
            DIVIDEND: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 64,
                },
              },
            },
            DIVISOR: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 10,
                },
              },
            },
          },
        },
        {
          type: "math_constrain",
          kind: "block",
          inputs: {
            VALUE: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 50,
                },
              },
            },
            LOW: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            HIGH: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          type: "math_random_int",
          kind: "block",
          inputs: {
            FROM: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            TO: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          type: "math_random_float",
          kind: "block",
        },
        {
          type: "math_atan2",
          kind: "block",
          inputs: {
            X: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
            Y: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1,
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: "category",
      name: "Variables",
      custom: "VARIABLE",
      categorystyle: "variable_category",
    },
    {
      kind: "category",
      name: "Functions",
      custom: "PROCEDURE",
      categorystyle: "procedure_category",
    },
    {
      kind: "sep",
    },
    {
      kind: "category",
      name: "Game",
      colour: "#03a5fc",
      contents: [
        {
          type: "game_on_start",
          kind: "block",
        },
        {
          type: "game_scene",
          kind: "block",
        },
        {
          type: "game_keypressed",
          kind: "block",
        },
        {
          type: "game_on_tick",
          kind: "block",
        },
        {
          type: "game_goscene",
          kind: "block",
        },
        {
          type: "game_deltatime",
          kind: "block",
        },
        {
          type: "game_set_gravity",
          kind: "block",
        },
        {
          type: "game_load_sprite",
          kind: "block",
        },
        {
          type: "game_create_gameobject",
          kind: "block",
        },
        {
          
        },
        {
          type: "gameobject_jump",
          kind: "block",
        },
      ],
    },
    {
      kind: "category",
      name: "Data URI",
      colour: "#000",
      contents: [
        {
          type: "datauri_get",
          kind: "block",
        },
      ],
    },
    {
      kind: "category",
      name: "Components",
      colour: 330,
      contents: [
        {
          type: "collision_add_area",
          kind: "block",
        },
        {
          type: "collision_grounded",
          kind: "block",
        },
        {
          type: "physics_add_body",
          kind: "block",
        },
        {
          type: "physics_addbodystatic",
          kind: "block",
        },
      ],
    },
    {
      kind: "category",
      name: "Movement",
      colour: 230,
      contents: [
        {
          type: "movement_gotoxy",
          kind: "block",
        },
        {
          type: "movement_movexy",
          kind: "block",
        },
        {
          type: "movement_xpos",
          kind: "block",
        },
        {
          type: "movement_ypos",
          kind: "block",
        },
      ],
    },
    {
      kind: "category",
      name: "Timer",
      colour: 160,
      contents: [
        {
          type: "time_waitforseconds",
          kind: "block",
        },
        {
          type: "time_everyseconds",
          kind: "block",
        },
        {
          type: "time_timer",
          kind: "block",
        },
      ],
    },
    {
      // Lists Category
      kind: "CATEGORY",
      name: "Lists",
      colour: "%{BKY_LISTS_HUE}",
      contents: [
        {
          kind: "BLOCK",
          type: "lists_create_with",
          extraState: { itemCount: 0 },
        },
        {
          kind: "BLOCK",
          type: "lists_create_with",
          extraState: { itemCount: 3 },
        },
        {
          kind: "BLOCK",
          type: "lists_repeat",
          inputs: {
            NUM: {
              shadow: {
                type: "math_number",
                fields: { NUM: 5 },
              },
            },
          },
        },
        {
          kind: "BLOCK",
          type: "lists_length",
        },
        {
          kind: "BLOCK",
          type: "lists_isEmpty",
        },
        {
          kind: "BLOCK",
          type: "lists_indexOf",
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
                fields: {
                  VAR: {
                    name: "%{BKY_VARIABLES_DEFAULT_NAME}",
                    type: "List",
                  },
                },
              },
            },
          },
        },
        {
          kind: "BLOCK",
          type: "lists_getIndex",
          inputs: {
            VALUE: {
              block: {
                type: "variables_get",
                fields: {
                  VAR: {
                    name: "%{BKY_VARIABLES_DEFAULT_NAME}",
                    type: "List",
                  },
                },
              },
            },
          },
        },
        {
          kind: "BLOCK",
          type: "lists_setIndex",
          inputs: {
            LIST: {
              block: {
                type: "variables_get",
                fields: {
                  VAR: {
                    name: "%{BKY_VARIABLES_DEFAULT_NAME}",
                    type: "List",
                  },
                },
              },
            },
          },
        },
        {
          kind: "BLOCK",
          type: "lists_getSublist",
          inputs: {
            LIST: {
              block: {
                type: "variables_get",
                fields: {
                  VAR: {
                    name: "%{BKY_VARIABLES_DEFAULT_NAME}",
                    type: "List",
                  },
                },
              },
            },
          },
        },
        {
          kind: "BLOCK",
          type: "lists_getSublist",
          inputs: {
            LIST: {
              block: {
                type: "variables_get",
                fields: {
                  VAR: {
                    name: "%{BKY_VARIABLES_DEFAULT_NAME}",
                    type: "List",
                  },
                },
              },
            },
          },
        },
        {
          kind: "BLOCK",
          type: "lists_split",
          inputs: {
            DELIM: {
              shadow: {
                type: "text",
                fields: { TEXT: "," },
              },
            },
          },
        },
        {
          kind: "BLOCK",
          type: "lists_sort",
          inputs: {
            LIST: {
              block: {
                type: "variables_get",
                fields: {
                  VAR: {
                    name: "%{BKY_VARIABLES_DEFAULT_NAME}",
                    type: "List",
                  },
                },
              },
            },
          },
        },
        {
          kind: "BLOCK",
          type: "lists_reverse",
          inputs: {
            LIST: {
              block: {
                type: "variables_get",
                id: "Jyppgi#k[zERF`IH{gqY",
                fields: {
                  VAR: {
                    name: "%{BKY_VARIABLES_DEFAULT_NAME}",
                    type: "List",
                  },
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: "category",
      name: "Window",
      colour: 20,
      contents: [
        {
          type: "window_gameresolution",
          kind: "block",
        },
        {
          type: "window_center",
          kind: "block",
        },
        {
          type: "window_focused",
          kind: "block",
        },
        {
          type: "window_touchscreen",
          kind: "block",
        },
        {
          type: "window_fullscreen",
          kind: "block",
        },
        {
          type: "window_setfullscreen",
          kind: "block",
        },
      ],
    },
    {
      kind: "category",
      name: "Input",
      colour: 65,
      contents: [
        {
          type: "input_keydown",
          kind: "block",
        },
        {
          type: "input_keypressed",
          kind: "block",
        },
        {
          type: "input_keyreleased",
          kind: "block",
        },
        {
          type: "input_mousedown",
          kind: "block",
        },
        {
          type: "input_mousepressed",
          kind: "block",
        },
        {
          type: "input_mousereleased",
          kind: "block",
        },
        {
          type: "input_mousepos",
          kind: "block",
        },
      ],
    },
  ],
};
