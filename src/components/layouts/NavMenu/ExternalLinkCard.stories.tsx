import type { Meta, StoryObj } from "@storybook/react";
import { FaGithub, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { SiZenn } from "react-icons/si";
import { ExternalLinkCard } from "./ExternalLinkCard";

const meta = {
  component: ExternalLinkCard,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    href: "https://example.com",
    text: "@example",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ExternalLinkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Zenn: Story = {
  args: {
    icon: <SiZenn size={20} className="fill-[#3EA8FF]" />,
  },
};
export const GitHub: Story = {
  args: {
    icon: <FaGithub size={20} />,
  },
};
export const X: Story = {
  args: {
    icon: <FaXTwitter size={20} />,
  },
};
export const YouTube: Story = {
  args: {
    icon: <FaYoutube size={20} className="fill-[#FF0000]" />,
  },
};
