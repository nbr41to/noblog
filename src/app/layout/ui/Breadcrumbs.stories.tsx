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
  args: {},
  parameters: {
    nextjs: {
      router: {
        pathname: '/posts/zenn',
      },
    },
  },
};
export const UseTitleEnum: StoryObj<typeof Component> = {
  args: {
    titleEnum: {
      '[page_id]': '記事タイトル',
    },
  },
  parameters: {
    nextjs: {
      router: {
        pathname: '/posts/[page_id]',
      },
    },
  },
};
