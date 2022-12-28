import type { Meta, StoryObj } from '@storybook/react';

import { PostContent as Component } from './PostContent';
import exampleBlocks from '@/mock/notion_blocks.json';
import { NotionBlockObjectResponse } from '@/types/notion';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    blocks: exampleBlocks as NotionBlockObjectResponse[],
  },
};
