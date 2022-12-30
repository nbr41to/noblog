import type { Meta, StoryObj } from '@storybook/react';
import type { NotionPageObjectResponse } from '~/types/notion';

import examplePosts from '~/mock/notion_pages.json';

import { PostGrid as Component } from './PostGrid';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    posts: examplePosts as NotionPageObjectResponse[],
  },
};
