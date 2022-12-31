import type { ToDoBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { Meta, StoryObj } from '@storybook/react';

import exampleBlock from './example.json';
import { ToDo as Component } from './ToDo';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Checked: StoryObj<typeof Component> = {
  args: {
    block: {
      ...(exampleBlock as ToDoBlockObjectResponse),
      to_do: {
        ...(exampleBlock as ToDoBlockObjectResponse).to_do,
        checked: true,
      },
    },
  },
};

export const NotChecked: StoryObj<typeof Component> = {
  args: {
    block: exampleBlock as ToDoBlockObjectResponse,
  },
};
