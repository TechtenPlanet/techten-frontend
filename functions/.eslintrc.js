module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "quotes": ["error", "double"],
    "max-len": ["error", {"code": 120}],
    "no-trailing-spaces": "off",
    "object-curly-spacing": ["error", "never"],
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
};
