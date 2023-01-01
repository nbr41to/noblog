import type { Meta, StoryObj } from '@storybook/react';

import { ContactBySns as Component } from './ContactBySns';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
