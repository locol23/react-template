'use strict';

const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: ['react'],
  rules: {
    quotes: [ERROR, 'single'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    "react/prop-types": "off",
    "prettier/prettier": [
      "error",
      {
        'semi': false,
        'singleQuote': true,
        'tabWidth': 2,
        'bracketSpacing': true,
        'trailingComma': 'es5'
      }
    ]
  },
  parserOptions: {
    sourceType: 'module'
  }
};
