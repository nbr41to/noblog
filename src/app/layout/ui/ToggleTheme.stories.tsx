import type { Meta, StoryObj } from '@storybook/react';

import { ToggleTheme as Component } from './ToggleTheme';

export default {
  component: Component,
  argTypes: {},
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
