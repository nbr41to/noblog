import type { Meta, StoryObj } from '@storybook/react';
import type { NotionBlockObjectResponse } from '~/types/notion';

import exampleBlocks from '~/mock/notion_blocks.json';

import { PostContent as Component } from './PostContent';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    blocks: exampleBlocks as NotionBlockObjectResponse[],
  },
};
