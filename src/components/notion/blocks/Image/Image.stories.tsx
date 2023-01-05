import type { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { Meta, StoryObj } from '@storybook/react';

import exampleBlock from './example.json';
import { Image as Component } from './Image';

export default {
  component: Component,
  argTypes: {},
} as Meta<typeof Component>;

export const Default: StoryObj<typeof Component> = {
  args: {
    block: exampleBlock as ImageBlockObjectResponse,
  },
};

export const Error: StoryObj<typeof Component> = {
  args: {
    block: {
      ...exampleBlock,
      image: {
        ...exampleBlock.image,
        file: {
          url: 'https://example.com/example.comexample.comexample.comexample.comexample.comexample.com/404.png',
          expiry_time: '2022-12-23T09:55:00.005Z',
        },
      },
    } as ImageBlockObjectResponse,
  },
};
