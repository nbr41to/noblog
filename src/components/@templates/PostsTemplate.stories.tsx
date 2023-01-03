import type { Meta, StoryObj } from '@storybook/react';
import type {
  NotionDatabaseProperty,
  NotionPageObjectResponse,
} from '~/types/notion';

import exampleProperties from '~/mocks/notion_database_properties.json';
import examplePostsArray from '~/mocks/notion_posts_array.json';

import { PostsTemplate as Component } from './PostsTemplate';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    postsArray: examplePostsArray as NotionPageObjectResponse[][],
    properties: exampleProperties as NotionDatabaseProperty,
  },
};
