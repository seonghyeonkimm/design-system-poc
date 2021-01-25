const { version } = require('./package.json');

module.exports = {
  version,
    // We are skipping the props docs generation in dev to speed-up the dev server
  propsParser: process.env.NODE_ENV === "development" ? undefined : require("react-docgen-typescript").parse,
  sections: [
    {
      name: "Components",
      sectionDepth: 1,
      components: "src/components/**/*.tsx",
    },
  ],
}