export default {
  name: "settings",
  title: "Settings",
  type: "document",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "profile",
      type: "profile",
    },
    {
      name: "systemSettings",
      type: "systemSettings",
    },
  ],
};
