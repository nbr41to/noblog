import type { Meta, StoryObj } from "@storybook/react";
import { NavMenu } from "./NavMenu";

const meta = {
  component: NavMenu,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof NavMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
