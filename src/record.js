/**
 * Blood Record Document
 */
import { format } from "date-fns";

export default {
  name: "record",
  title: "Record",
  type: "document",
  liveEdit: false,
  fields: [
    {
      name: "bloodSugar",
      type: "number",
      title: "Blood Sugar",
      description: "What was your blood sugar at the time of this reading?",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Time Logged",
      name: "loggedAt",
      description: "What date/time did the blood test take place?",
      type: "datetime",
      options: {
        dateFormat: "dddd, MMMM Do YYYY",
        timeFormat: "h:mm:ss a",
        timeStep: 15,
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "mood",
      type: "mood",
    },
    {
      name: "mealTime",
      type: "string",
      title: "Are you taking this test:",
      options: {
        layout: "radio",
        list: [
          {
            title: "Before a meal?",
            value: "before",
          },
          {
            title: "After a meal?",
            value: "after",
          },
          {
            title: "Neither",
            value: "na",
          },
        ],
      },
    },
    {
      name: "alcohol",
      title: "Did you drink alcohol before this test?",
      type: "boolean",
    },
    {
      title: "Meal/Snack",
      description:
        "If you have or are about to eat a meal/snack then log what you have or are about to eat here",
      name: "meal",
      type: "array",
      of: [
        { type: "food", title: "New Food" },
        { type: "foodReference", title: "Pick from My Foods" },
      ],
    },
    {
      type: "richText",
      name: "notes",
      description: "Use this space to include notes about this reading.",
    },
  ],
  preview: {
    select: {
      title: "bloodSugar",
      publishedAt: "loggedAt",
    },
    prepare({ title = "No reading", publishedAt }) {
      const date = new Date(publishedAt);
      const dateSegment = format(date, "dd MMM yyyy (HH:mma)");

      return {
        title: `${title} - ${dateSegment}`,
      };
    },
  },
  initialValue: {
    loggedAt: new Date().toISOString(),
  },
};
