import type { Meta, StoryObj } from '@storybook/react';

import { PageTitle as Component } from './PageTitle';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    title: 'Page title',
  },
};
