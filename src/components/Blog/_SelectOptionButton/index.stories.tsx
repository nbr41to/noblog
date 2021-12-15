import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { SelectOptionButton } from '.';

export default {
  title: 'Blog/SelectOptionButton',
  component: SelectOptionButton,
} as ComponentMeta<typeof SelectOptionButton>;

const Template: ComponentStory<typeof SelectOptionButton> = (args) => {
  const [selected, setSelected] = useState(false);
  return (
    <SelectOptionButton
      {...args}
      selected={selected}
      onClick={() => setSelected(!selected)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'programming',
  color: 'orange',
  selected: false,
};
// export const Contain = Template.bind({});
