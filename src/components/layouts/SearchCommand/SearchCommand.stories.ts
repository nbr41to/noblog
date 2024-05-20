import type { Meta, StoryObj } from "@storybook/react";
import { SearchCommand } from "./SearchCommand";

const meta = {
  component: SearchCommand,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof SearchCommand>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
