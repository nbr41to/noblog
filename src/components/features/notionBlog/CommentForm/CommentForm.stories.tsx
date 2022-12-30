import type { Meta, StoryObj } from "@storybook/react";

import { CommentForm as Component } from "./CommentForm";

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {},
};
