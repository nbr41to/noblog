import type { Meta, StoryObj } from '@storybook/react';

import { GitHubCommits as Component } from './GitHubCommits';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
