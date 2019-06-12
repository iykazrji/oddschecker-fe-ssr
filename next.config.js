const withImages = require("next-images");
const withCSS = require("@zeit/next-css");
const path = require("path");

module.exports = withCSS(
  withImages({
    webpack(config) {
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias["@"] = path.join(__dirname, "src");
      return config;
    }
  })
);
