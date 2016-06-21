module.exports = {
  "extends": [
    "eslint:recommended",
    "airbnb-base"
  ],
  "rules": {
    "comma-dangle": ["error", "never"],
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "no-underscore-dangle": ["error", { "allowAfterThis": true }]
  }
};
