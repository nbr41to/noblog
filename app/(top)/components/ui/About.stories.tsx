import type { Meta, StoryObj } from '@storybook/react';

import { About as Component } from './About';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
