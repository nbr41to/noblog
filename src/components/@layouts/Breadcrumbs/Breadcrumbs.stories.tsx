import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumbs as Component } from './Breadcrumbs';

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
    currentPath: '/posts/zenn',
  },
};
export const UseTitleEnum: StoryObj<typeof Component> = {
  args: {
    currentPath: '/posts/[page_id]',
    titleEnum: {
      '[page_id]': '記事タイトル',
    },
  },
};
