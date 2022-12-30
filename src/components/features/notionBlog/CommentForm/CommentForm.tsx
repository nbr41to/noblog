import type { FC } from "react";

import { Button } from "@mantine/core";
import { Link, RichTextEditor } from "@mantine/tiptap";
import Underline from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type Props = {
  onSubmit: (params: string) => void;
};

export const CommentForm: FC<Props> = ({ onSubmit }) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Link],
    content: "<p>Hello world!</p>",
  });

  const handleSubmit = () => {
    onSubmit(editor?.getText() ?? "");
  };

  return (
    <div className="">
      <RichTextEditor
        editor={editor}
        className="max-h-[600px] min-h-[280px] overflow-y-scroll bg-white"
      >
        <RichTextEditor.Toolbar sticky stickyOffset={0}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.Code />
            <RichTextEditor.ClearFormatting />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Blockquote />
            <RichTextEditor.Hr />
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
            <RichTextEditor.Link />
            <RichTextEditor.Unlink />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor>
      <Button onClick={handleSubmit}>送信</Button>
    </div>
  );
};
