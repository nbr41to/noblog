import type { Meta, StoryObj } from "@storybook/react";
import type { Ogp } from "~/types/ogp";

import { BaseBookmark as Component } from "./Bookmark";
import exampleOgp from "./example2.json";

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    ogp: exampleOgp as Ogp,
    isLoading: false,
  },
};
export const Loading: StoryObj<typeof Component> = {
  args: {
    isLoading: true,
  },
};
