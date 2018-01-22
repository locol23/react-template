'use strict';

const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react'],
  rules: {
    quotes: [ERROR, 'single']
  },
  parserOptions: {
    sourceType: 'module'
  }
};
