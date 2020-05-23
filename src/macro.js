/**
 * Macro Object
 * Referenced in the Food Document
 */

export default {
  name: "macro",
  title: "Macro",
  type: "object",
  fields: [
    {
      name: "macroType",
      type: "string",
      label: "Type of Macro e.g. Carbohydrates",

      options: {
        layout: "dropdown",
        list: [
          {
            title: "Carbohydrates",
            value: "carbohydrates",
          },
          {
            title: "Fat",
            value: "fat",
          },
          {
            title: "Protein",
            value: "protein",
          },
        ],
      },
    },
  ],
};
