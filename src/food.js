/**
 * Food Document
 */

export default {
  name: "food",
  title: "Food",
  type: "document",
  liveEdit: false,
  fields: [
    {
      title: "Name of Food/Meal",
      name: "name",
      type: "string",
      description:
        "This can be a single item of food (e.g. 'Quavers Crisps') or a meal (e.g. 'Lasagne')",
    },
    {
      name: "foodType",
      type: "string",
      title: "Meal Type:",
      options: {
        layout: "dropdown",
        list: [
          {
            title: "Breakfast",
            value: "breakfast",
          },
          {
            title: "Lunch",
            value: "lunch",
          },
          {
            title: "Dinner",
            value: "dinner",
          },
          {
            title: "Snack",
            value: "snack",
          },
        ],
      },
    },
    {
      name: "image",
      type: "image",
      title: "Photo",
      description: "You can upload a picture of your meal",
    },
    {
      name: "nutrition",
      type: "nutrition",
    },
  ],
};
