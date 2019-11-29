module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "airbnb"
  ],
  "plugins": [
    "react-hooks"
  ],
  "rules": {
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/no-unused-prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
