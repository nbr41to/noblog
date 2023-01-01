import type { Meta, StoryObj } from '@storybook/react';

import { ProfileTemplate as Component } from './ProfileTemplate';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
