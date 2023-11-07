import type { Meta, StoryObj } from '@storybook/react';

import { SearchButton as Component } from './SearchButton';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
