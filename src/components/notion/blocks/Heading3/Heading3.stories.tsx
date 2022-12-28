import type { Meta, StoryObj } from '@storybook/react';

import exampleBlock from './example.json';
import { Heading3 as Component } from './Heading3';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    block: exampleBlock,
  },
};
