import type { Meta, StoryObj } from '@storybook/react';

import { HomeIcon } from '~/commons/icons';

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
export const WithLeftIcon: StoryObj<typeof Component> = {
  args: {
    href: '/',
    label: 'Home',
    leftIcon: <HomeIcon size={18} />,
  },
};
export const WithRightIcon: StoryObj<typeof Component> = {
  args: {
    href: '/',
    label: 'Home',
    rightIcon: <HomeIcon size={18} />,
  },
};
