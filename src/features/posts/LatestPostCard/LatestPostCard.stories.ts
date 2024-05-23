import type { Meta, StoryObj } from "@storybook/react";
import { LatestPostCard } from "./LatestPostCard";

const meta = {
  component: LatestPostCard,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    postId: "1",
    icon: "🎃",
    title: "Notionでブログをつくってみよう！！",
    updatedAt: new Date("2024-09-01T00:00:00Z"),
    tags: ["react", "notion"],
  },
} satisfies Meta<typeof LatestPostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
