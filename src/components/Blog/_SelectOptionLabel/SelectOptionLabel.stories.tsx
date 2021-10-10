import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { SelectOptionLabel } from '.';

export default {
  title: 'SelectOptionLabel',
  component: SelectOptionLabel,
} as ComponentMeta<typeof SelectOptionLabel>;

const Template: ComponentStory<typeof SelectOptionLabel> = (args) => (
  <SelectOptionLabel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'react',
  color: 'blue',
};
