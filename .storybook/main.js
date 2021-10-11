const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../'),
    ];
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/mocks': path.resolve(__dirname, '../__mocks__'),
    };
    return config;
  },
};
