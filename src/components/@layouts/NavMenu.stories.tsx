import type { Meta, StoryObj } from '@storybook/react';

import { NavMenu as Component } from './NavMenu';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
