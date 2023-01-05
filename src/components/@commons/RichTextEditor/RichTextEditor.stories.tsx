import type { Meta, StoryFn } from '@storybook/react';

import { useEditor } from '@tiptap/react';

import { RichTextEditor as Component } from './RichTextEditor';

export default {
  component: Component,
} as Meta<typeof Component>;

export const Default: StoryFn<typeof Component> = (args) => {
  const editor = useEditor();

  return <Component {...args} editor={editor} />;
};
