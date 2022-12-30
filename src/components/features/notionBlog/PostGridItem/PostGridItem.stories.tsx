import type { Meta, StoryObj } from '@storybook/react';
import type { NotionPageObjectResponse } from '~/types/notion';

import examplePost from '~/mock/notion_page.json';

import { PostGridItem as Component } from './PostGridItem';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    post: examplePost as NotionPageObjectResponse,
  },
};
