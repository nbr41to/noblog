import type { Meta, StoryObj } from '@storybook/react';
import type { NotionPost } from '~/types/notion';

import examplePost from '~/mock/notion_post.json';

import { PostDetailTemplate as Component } from './PostDetailTemplate';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    post: examplePost as NotionPost,
  },
};
