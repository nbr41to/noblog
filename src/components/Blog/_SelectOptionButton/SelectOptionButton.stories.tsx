import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';

import { SelectOptionButton } from '.';

export default {
  title: 'SelectOptionButton',
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
  name: 'programming',
  color: 'orange',
};
// export const Contain = Template.bind({});
