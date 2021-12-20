import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { SelectOptionLabel } from '.';

export default {
  title: 'Blog/SelectOptionLabel',
  component: SelectOptionLabel,
} as ComponentMeta<typeof SelectOptionLabel>;

const Template: ComponentStory<typeof SelectOptionLabel> = (args) => (
  <SelectOptionLabel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'react',
  color: 'blue',
};
