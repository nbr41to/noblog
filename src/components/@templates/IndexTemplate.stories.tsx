import type { Meta, StoryObj } from '@storybook/react';
import type { NotionPageObjectResponse } from '~/types/notion';

import examplePages from '~/mocks/notion_pages.json';

import { IndexTemplate as Component } from './IndexTemplate';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    posts: examplePages as NotionPageObjectResponse[],
  },
};
