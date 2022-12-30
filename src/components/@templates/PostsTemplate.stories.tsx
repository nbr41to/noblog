import type { Meta, StoryObj } from '@storybook/react';
import type { NotionPageObjectResponse } from '~/types/notion';

import examplePages from '~/mock/notion_pages.json';

import { PostsTemplate as Component } from './PostsTemplate';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    postsArray: [examplePages, examplePages] as NotionPageObjectResponse[][],
  },
};
