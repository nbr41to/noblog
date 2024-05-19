import { ThemeProvider } from '@/libs/next-themes/theme-provider';
import type { Meta, StoryObj } from '@storybook/react';
import { SwitchTheme } from './SwitchTheme';

const meta = {
  component: SwitchTheme,
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof SwitchTheme>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
