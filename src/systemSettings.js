export default {
  title: "Application settings",
  name: "systemSettings",
  type: "object",
  options: {
    collapsible: true,
    collapsed: false,
  },
  fieldsets: [{ name: "bloodSettings", title: "Blood Tracking Settings" }],
  fields: [
    {
      title: "Mesurement Unit",
      description: "Select your preferred unit for measuring blood sugar.",
      name: "unit",
      type: "string",
      fieldset: "bloodSettings",
      validation: (Rule) => Rule.required(),
      options: {
        layout: "dropdown",
        list: [
          {
            title: "mmol/L",
            value: "mmol",
          },
          {
            title: "mg/dL",
            value: "mgdl",
          },
        ],
      },
    },
    {
      title: "High Limit",
      description:
        "Readings above this limit will be classed as a High Result (hyper)",
      name: "hyperLimit",
      type: "number",
      fieldset: "bloodSettings",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Low Limit",
      description:
        "Readings below this limit will be classed as a Low Result (hypo)",
      name: "hypoLimit",
      type: "number",
      fieldset: "bloodSettings",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Show Graph (Experimental)",
      description:
        "If you enable this, we will plot your results on a graph. Please note this is currently an experimental feature.",
      name: "showGraph",
      type: "boolean",
      fieldset: "bloodSettings",
    },
  ],
};
