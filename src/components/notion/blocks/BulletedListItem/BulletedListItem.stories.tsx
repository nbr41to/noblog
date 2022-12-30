import type { BulletedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { Meta, StoryObj } from '@storybook/react';

import { BulletedListItem as Component } from './BulletedListItem';
import exampleBlock from './example.json';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    block: exampleBlock as BulletedListItemBlockObjectResponse,
  },
};
