export default {
  name: "foodReference",
  type: "object",
  title: "Food reference",
  fields: [
    {
      name: "food",
      type: "reference",
      to: [
        {
          type: "food",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "food.name",
      media: "food.image.asset",
    },
  },
};
