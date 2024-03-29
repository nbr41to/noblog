import type { Meta, StoryObj } from '@storybook/react';
import type { NotionPageObjectResponse } from '~/types/notion';

import examplePost from '~/mocks/notion_page.json';

import { PostListItem as Component } from './PostListItem';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    post: examplePost as NotionPageObjectResponse,
  },
};
