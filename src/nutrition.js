export default {
  title: "Nutritional Information",
  description:
    "Enter the nutritional values for this food/meal. If the item you are entering is pre packaged then you can find this information on the back of the packaging.",
  name: "nutrition",
  type: "object",
  fields: [
    {
      title: "Total Carbs (g)",
      type: "number",
      name: "carbohydrates",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Total Fats (g)",
      type: "number",
      name: "fats",
    },
    {
      title: "Protein (g)",
      type: "number",
      name: "protein",
    },
  ],
};
