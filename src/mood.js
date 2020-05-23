/**
 * Mood Object
 */

export default {
  title: "Mood",
  name: "mood",
  type: "array",
  of: [{ type: "string" }],
  options: {
    list: [
      {
        title: "I'm happy!",
        value: "happy",
      },
      {
        title: "I feel neutral",
        value: "neutral",
      },
      {
        title: "I feel anxious",
        value: "anxious",
      },
      {
        title: "I'm stressed",
        value: "stressed",
      },
      {
        title: "I'm tired",
        value: "tired",
      },
      {
        title: "I'm chilling out",
        value: "chilled",
      },
      {
        title: "I've got a headache",
        value: "headache",
      },
      {
        title: "I'm on my period",
        value: "menstruating",
      },
      {
        title: "I feel sick",
        value: "sick",
      },
      {
        title: "I'm hungover",
        value: "hungover",
      },
      {
        title: "I'm nervous",
        value: "nervous",
      },
      {
        title: "I'm in pain",
        value: "pain",
      },
      {
        title: "I'm hypo",
        value: "hypo",
      },
      {
        title: "I've just had a hypo",
        value: "hypoAfter",
      },
    ],
  },
};
