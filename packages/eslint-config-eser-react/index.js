module.exports = {
  extends: [
    "eslint-config-eser",
    "./rules/react.js",
    "./rules/react-a11y.js",
    "./rules/react-hooks.js",
  ].map(require.resolve),

  rules: {},
};
