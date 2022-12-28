import type { Meta, StoryObj } from '@storybook/react';
import { PostHeader as Component } from './PostHeader';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    post: {
      id: 'page-id',
      icon: '🎉',
      title: 'Post Title',
      date: '2021-01-01',
      updatedAt: '2021-01-01',
      category: 'Category Name',
      tags: [
        {
          id: 'tag-id',
          name: 'Tag Name1',
          color: 'gray',
        },
        {
          id: 'tag-id',
          name: 'Tag Name2',
          color: 'orange',
        },
      ],
      likes: 8,
    },
  },
};
