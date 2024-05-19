import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from "./Layout";

const meta = {
  component: Layout,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContentAFew: Story = {
  args: {
    children: (
      <div className="m-5 grid h-80 place-content-center rounded border border-dashed p-5">
        a few page content
      </div>
    ),
  },
};
export const ContentMany: Story = {
  args: {
    children: (
      <div className="m-5 grid h-screen place-content-center rounded border border-dashed p-5">
        many content
      </div>
    ),
  },
};
