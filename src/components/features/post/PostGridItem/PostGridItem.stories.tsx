import type { Meta, StoryObj } from '@storybook/react';

import { PostGridItem as Component } from './PostGridItem';
import examplePost from '@/mock/notion_page.json';
import { NotionPageObjectResponse } from '@/types/notion';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    post: examplePost as NotionPageObjectResponse,
  },
};
