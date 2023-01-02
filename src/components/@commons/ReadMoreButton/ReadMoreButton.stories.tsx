import type { Meta, StoryObj } from '@storybook/react';

import { ReadMoreButton as Component } from './ReadMoreButton';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    href: 'https://www.google.com',
  },
};
export const Blank: StoryObj<typeof Component> = {
  args: {
    href: 'https://www.google.com',
    blank: true,
  },
};
