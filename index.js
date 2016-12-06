module.exports = {
  "extends": [
    "eslint:recommended",
    "airbnb"
  ],
  "rules": {
    "comma-dangle": ["error", "never"],
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": "off",
    "react/no-unused-prop-types": "off"
  }
};
