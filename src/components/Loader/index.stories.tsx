import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Loader } from '.';

export default {
  title: 'atoms/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};
