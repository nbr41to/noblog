import type { Meta, StoryObj } from '@storybook/react';

import { BsTwitter } from 'react-icons/bs';

import { NavMenuExternalLink as Component } from './NavMenuExternalLink';

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
    label: 'Twitter',
    icon: <BsTwitter size={18} />,
  },
};
