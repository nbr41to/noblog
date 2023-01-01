import type { FC } from 'react';

import { getHotkeyHandler } from '@mantine/hooks';
import { RichTextEditor as TiptapRichTextEditor, Link } from '@mantine/tiptap';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

type Props = {
  placeholder?: string;
  onSubmit: () => Promise<void>;
  hotkey?: string;
};

export const RichTextEditor: FC<Props> = ({
  placeholder,
  onSubmit,
  hotkey,
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Placeholder.configure({ placeholder }),
    ],
    content: '',
  });

  return (
    <TiptapRichTextEditor
      className="max-h-[600px] min-h-[280px] overflow-y-scroll bg-white sp:rounded-none sp:border-none"
      editor={editor}
      onKeyDown={
        hotkey && onSubmit ? getHotkeyHandler([[hotkey, onSubmit]]) : undefined
      }
      styles={{
        content: {
          minHeight: '220px',
        },
      }}
    >
      <TiptapRichTextEditor.Toolbar
        sticky
        stickyOffset={0}
        className="sp:hidden"
      >
        <TiptapRichTextEditor.ControlsGroup>
          <TiptapRichTextEditor.Bold />
          <TiptapRichTextEditor.Italic />
          <TiptapRichTextEditor.Underline />
          <TiptapRichTextEditor.Strikethrough />
          <TiptapRichTextEditor.Code />
          <TiptapRichTextEditor.ClearFormatting />
        </TiptapRichTextEditor.ControlsGroup>

        <TiptapRichTextEditor.ControlsGroup>
          <TiptapRichTextEditor.H1 />
          <TiptapRichTextEditor.H2 />
          <TiptapRichTextEditor.H3 />
        </TiptapRichTextEditor.ControlsGroup>

        <TiptapRichTextEditor.ControlsGroup>
          <TiptapRichTextEditor.Blockquote />
          <TiptapRichTextEditor.Hr />
          <TiptapRichTextEditor.BulletList />
          <TiptapRichTextEditor.OrderedList />
          <TiptapRichTextEditor.Link />
          <TiptapRichTextEditor.Unlink />
        </TiptapRichTextEditor.ControlsGroup>
      </TiptapRichTextEditor.Toolbar>

      <TiptapRichTextEditor.Content onClick={() => editor?.commands.focus()} />
    </TiptapRichTextEditor>
  );
};
