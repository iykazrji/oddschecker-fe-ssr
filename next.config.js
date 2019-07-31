const withImages = require("next-images");
const withCSS = require("@zeit/next-css");
const path = require("path");

require("dotenv").config();

module.exports = withCSS(
  withImages({
    webpack(config) {
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias["@"] = path.join(__dirname, "src");
      return config;
    },
    env: {
      MAILCHIMP_U: process.env.MAILCHIMP_U,
      MAILCHIMP_ID: process.env.MAILCHIMP_ID
    }
  })
);
