import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
