import type { ViewControl } from './PostsViewControl';
import type { Meta, StoryObj } from '@storybook/react';
import type { NotionBlogPropertiesWithCount } from '~/types/notion';

import { useState } from 'react';

import examplePropertiesWithCount from '~/mocks/notion_blog_properties_with_count.json';

import { PostsViewControl as Component } from './PostsViewControl';

export default {
  component: Component,
  decorators: [
    () => {
      const [viewControlValue, setViewControlValue] = useState<ViewControl>({
        type: 'grid',
        categoryId: '',
        tagIds: [],
      });

      return (
        <Component
          properties={
            examplePropertiesWithCount as NotionBlogPropertiesWithCount
          }
          value={viewControlValue}
          onChange={setViewControlValue}
        />
      );
    },
  ],
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    properties: examplePropertiesWithCount as NotionBlogPropertiesWithCount,
  },
};
