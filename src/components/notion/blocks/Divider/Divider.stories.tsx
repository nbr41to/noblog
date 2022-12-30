import type { Meta, StoryObj } from '@storybook/react';

import { Divider as Component } from './Divider';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
