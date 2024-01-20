import type { Meta, StoryObj } from '@storybook/react';
import type { NotionPageObjectResponse } from '~/types/notion';

import examplePost from '~/mocks/notion_page.json';

import { PostGridItem as Component } from './PostGridItem';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    post: examplePost as NotionPageObjectResponse,
  },
};
export const LongTitle: StoryObj<typeof Component> = {
  args: {
    post: {
      ...examplePost,

      properties: {
        ...examplePost.properties,
        Title: {
          id: 'title',
          type: 'title',
          title: [
            {
              type: 'text',
              text: {
                content:
                  'Very long title Very long title Very long title Very long title Very long title Very long title',
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: 'default',
              },
              plain_text:
                'Very long title Very long title Very long title Very long title Very long title Very long title',
              href: null,
            },
          ],
        },
      },
    } as NotionPageObjectResponse,
  },
};
