import type { Meta, StoryObj } from '@storybook/react';

import { LoginTemplate as Component } from './LoginTemplate';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
