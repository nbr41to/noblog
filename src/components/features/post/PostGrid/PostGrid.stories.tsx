import type { Meta, StoryObj } from '@storybook/react';

import { PostGrid as Component } from './PostGrid';
import examplePosts from '@/mock/notion_pages.json';
import { NotionPageObjectResponse } from '@/types/notion';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    posts: examplePosts as NotionPageObjectResponse[],
  },
};
