import type { Meta, StoryObj } from '@storybook/react';
import type { NotionPageObjectResponse } from '~/types/notion';

import examplePosts from '~/mocks/notion_pages.json';

import { PostList as Component } from './PostList';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    posts: examplePosts as NotionPageObjectResponse[],
  },
};
