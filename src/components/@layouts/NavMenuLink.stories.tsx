import type { Meta, StoryObj } from '@storybook/react';

import { AiFillHome } from 'react-icons/ai';

import { NavMenuLink as Component } from './NavMenuLink';

export default {
  component: Component,
  parameters: {
    backgrounds: {
      default: 'slate',
      values: [{ name: 'slate', value: '#1e293b' }],
    },
  },
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    href: '/path/to/destination',
    label: 'Documentation',
  },
};
export const WithIcon: StoryObj<typeof Component> = {
  args: {
    href: '/',
    label: 'Home',
    icon: <AiFillHome size={18} />,
  },
};
