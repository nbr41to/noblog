import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from 'react';
import { baloo2, notoSansJP } from '../src/styles/font';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chromatic: { disableSnapshot: true },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (Story) => (
      <div className={`${notoSansJP.variable} ${baloo2.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
