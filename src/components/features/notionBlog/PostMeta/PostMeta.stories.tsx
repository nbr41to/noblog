import type { Meta, StoryObj } from '@storybook/react';
import type { NotionPostMeta } from '~/types/notion';

import examplePost from '~/mocks/notion_post.json';

import { PostMeta as Component } from './PostMeta';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    meta: examplePost as NotionPostMeta,
    commentCount: 4,
  },
};
