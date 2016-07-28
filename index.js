module.exports = {
  "extends": [
    "eslint:recommended",
    "airbnb"
  ],
  "rules": {
    "comma-dangle": ["error", "never"],
    "import/no-unresolved": "off",
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
  }
};
