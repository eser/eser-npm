module.exports = {
  extends: [
    "./rules/best-practices.js",
    "./rules/errors.js",
    "./rules/node.js",
    "./rules/style.js",
    "./rules/variables.js",
    "./rules/es6.js",
    "./rules/imports.js",
    "./rules/strict.js",
    "./rules/typescript.js",
  ].map(require.resolve),

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },

  rules: {},
};
