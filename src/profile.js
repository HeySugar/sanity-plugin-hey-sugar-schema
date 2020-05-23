export default {
  title: "Your Profile",
  description:
    "Use this space to add information about yourself that will make up your public profile",
  type: "object",
  name: "profile",
  options: {
    collapsible: true,
    collapsed: false,
  },
  fieldsets: [{ name: "basicDetails", title: "Your basic details" }],
  fields: [
    {
      type: "string",
      name: "givenName",
      title: "Your given name",
      fieldset: "basicDetails",
    },
    {
      type: "string",
      name: "familyName",
      title: "Your family name",
      fieldset: "basicDetails",
    },
    {
      name: "avatar",
      type: "image",
      title: "Profile Image",
      description: "Upload your profile image",
    },
  ],
};
