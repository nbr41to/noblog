import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import '../styles/reset.css';
import '../styles/globals.css';
import { Story } from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'twitter',
    values: [
      {
        name: 'main',
        value: '#EBEEF2',
      },
      {
        name: 'gray',
        value: '#F5F5F5',
      },
    ],
  },
};

export const decorators = [
  (Story: Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
