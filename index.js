module.exports = {
  "extends": [
    "eslint:recommended",
    "airbnb"
  ],
  "rules": {
    "comma-dangle": ["error", "never"],
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "no-underscore-dangle": ["error", { "allowAfterThis": true }]
  }
};
