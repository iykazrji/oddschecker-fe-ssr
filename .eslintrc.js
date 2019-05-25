module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  parser: "babel-eslint",
  env: {
    jest: true
  },
  rules: {
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "comma-dangle": "off",
    "jsx-a11y/anchor-is-valid": "off"
  },
  globals: {
    fetch: false
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"]
      }
    }
  }
};
