import type { ParagraphBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { Meta, StoryObj } from '@storybook/react';

import exampleBlock from './example.json';
import { Paragraph as Component } from './Paragraph';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    block: exampleBlock as ParagraphBlockObjectResponse,
  },
};
