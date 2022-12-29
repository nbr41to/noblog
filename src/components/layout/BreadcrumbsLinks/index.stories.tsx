import type { Meta, StoryObj } from '@storybook/react';

import { BreadcrumbsLinks as Component } from '.';

export default {
  component: Component,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    items: [
      {
        title: 'Home',
        href: '#',
      },
      {
        title: 'Blog',
        href: '#',
      },
      {
        title: 'Lets talk about React',
        href: '#',
      },
    ],
  },
};
