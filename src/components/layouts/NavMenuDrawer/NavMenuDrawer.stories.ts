import type { Meta, StoryObj } from "@storybook/react";
import { NavMenuDrawer } from "./NavMenuDrawer";

const meta = {
  component: NavMenuDrawer,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof NavMenuDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
