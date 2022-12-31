import type { FC } from 'react';
import type { NotionRichTextItemRequest } from '~/types/notion';

import { Button, Kbd, Tooltip } from '@mantine/core';
import { getHotkeyHandler, useOs } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { Link, RichTextEditor } from '@mantine/tiptap';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useState } from 'react';
import { IoSend } from 'react-icons/io5';

import { toRichText } from '~/utils/toRichText';

type Props = {
  onSubmit: (rich_text: NotionRichTextItemRequest[]) => Promise<void>;
};

export const CommentForm: FC<Props> = ({ onSubmit }) => {
  const [commentable, setCommentable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Placeholder.configure({ placeholder: 'コメントを入力してください。' }),
    ],
    content: '',
  });
  const disabled = isLoading || !editor || !editor.getText();

  const os = useOs();

  const handleSubmit = async () => {
    if (disabled) return;

    const completed = false;
    if (completed) {
      setIsLoading(true);
      const rich_text = toRichText(editor.getJSON());
      await onSubmit(rich_text);
      editor.commands.setContent('');
      setIsLoading(false);
    } else {
      showNotification({
        title: 'コメント機能は現在準備中です。',
        message: 'コメント機能は現在準備中です。',
      });
    }
  };

  return (
    <div className="">
      {!commentable ? (
        <div className="min-h-[320px] sp:px-4">
          <Button fullWidth onClick={() => setCommentable(true)}>
            ログインしてコメントをする
          </Button>
          <div className="mt-4 rounded bg-white p-4">
            <p>
              現在コメント機能は開発中で,上のボタンを押すとすぐに入力フォームが表示されます.
            </p>
            <p>
              実際に送信はできませんが,tiptapのリッチテキストエディタをご堪能ください.
            </p>
          </div>
        </div>
      ) : (
        <div>
          <RichTextEditor
            className="max-h-[600px] min-h-[280px] overflow-y-scroll bg-white sp:rounded-none sp:border-none"
            editor={editor}
            onKeyDown={getHotkeyHandler([['mod+Enter', handleSubmit]])}
            styles={{
              content: {
                minHeight: '220px',
              },
            }}
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

            <RichTextEditor.Content onClick={() => editor?.commands.focus()} />
          </RichTextEditor>

          <div className="mt-2 flex items-center justify-end gap-3">
            <Tooltip
              position="top-end"
              arrowPosition="center"
              transition="pop-top-right"
              transitionDuration={300}
              withArrow
              color="orange"
              label={
                <div className="space-y-3 p-2 text-center text-sm">
                  <Kbd>{os === 'macos' ? 'Cmd' : 'Ctrl'}</Kbd> +{' '}
                  <Kbd>Enter</Kbd> でも送信できます。
                </div>
              }
            >
              <Button
                onClick={handleSubmit}
                loading={isLoading}
                disabled={disabled}
                rightIcon={<IoSend />}
              >
                送 信
              </Button>
            </Tooltip>
          </div>
        </div>
      )}
    </div>
  );
};
