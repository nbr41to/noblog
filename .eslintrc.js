module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint'],
  extends: ['next', 'eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:@next/next/recommended', 'prettier'],
  rules: {
    '@next/next/no-page-custom-font': 'off',
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'no-empty-function': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'no-console': 'warn',
    quotes: ['error', 'single'],
  },
};
