
import type { NotionPageObjectResponse } from '@/types/notion';
import type { Meta, StoryObj } from '@storybook/react';

import examplePosts from '@/mock/notion_pages.json';

import { PostList as Component } from './PostList';


export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    posts: examplePosts as NotionPageObjectResponse[],
  },
};
