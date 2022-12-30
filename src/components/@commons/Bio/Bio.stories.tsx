import type { Meta, StoryObj } from "@storybook/react";

import { Bio as Component } from "./Bio";

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    title: "Page title",
  },
};
