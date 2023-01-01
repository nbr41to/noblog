import type { Meta, StoryObj } from '@storybook/react';

import { RichTextEditor as Component } from './RichTextEditor';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    placeholder: 'ここに入力',
    hotkey: 'mod+enter',
  },
};
