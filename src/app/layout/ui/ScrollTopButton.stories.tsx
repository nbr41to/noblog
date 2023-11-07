import type { Meta, StoryObj } from '@storybook/react';

import { ScrollTopButton as Component } from './ScrollTopButton';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  render: () => (
    <div className="h-[calc(100vw+600px)]">
      <h2>page top</h2>
      <Component />
    </div>
  ),
};
