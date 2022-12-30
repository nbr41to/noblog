import type { Meta, StoryObj } from '@storybook/react';
import type { NotionCommentObjectResponse } from '~/types/notion';

import exampleCommentList from '~/mock/notion_comment_list.json';

import { Comments as Component } from './Comments';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    comments: exampleCommentList.results as NotionCommentObjectResponse[],
  },
};
