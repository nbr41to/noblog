import type { Meta, StoryObj } from '@storybook/react';

import { ContactForm as Component } from './ContactForm';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
