import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import mock_data from '@/mocks/blog_item.json';

import { BlogListItem } from '.';

export default {
  title: 'Blog/BlogListItem',
  component: BlogListItem,
} as ComponentMeta<typeof BlogListItem>;

const Template: ComponentStory<typeof BlogListItem> = (args) => (
  <BlogListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  item: mock_data,
};
