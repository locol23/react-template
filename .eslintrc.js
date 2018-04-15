'use strict';

const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react'],
  rules: {
    quotes: [ERROR, 'single'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
  },
  parserOptions: {
    sourceType: 'module'
  }
};
