import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Meta, StoryObj } from "@storybook/react";

import exampleBlock from "./example.json";
import { Image as Component } from "./Image";

export default {
  component: Component,
  argTypes: {},
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    block: exampleBlock as ImageBlockObjectResponse,
  },
};
