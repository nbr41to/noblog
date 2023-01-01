import type { FC } from 'react';
import type { NotionRichTextItemRequest } from '~/types/notion';

import { Button, clsx, Input } from '@mantine/core';
import { getHotkeyHandler } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { Link, RichTextEditor } from '@mantine/tiptap';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useReducer } from 'react';
import { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import { MdTouchApp } from 'react-icons/md';
import { SiMaildotru } from 'react-icons/si';

type Props = {
  onSubmit: (rich_text: NotionRichTextItemRequest[]) => Promise<void>;
};

export const ContactForm: FC<Props> = ({ onSubmit }) => {
  const [openForm, startAnimation] = useReducer(() => true, false);
  const [visibleCover, hiddenCover] = useReducer(() => false, true);

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

  const handleSubmit = async () => {
    if (disabled) return;
    setIsLoading(true);

    const completed = true;
    if (completed) {
      // eslint-disable-next-line no-console
      console.log(onSubmit);
    } else {
      showNotification({
        title: 'フォーム機能は現在準備中です。',
        message: 'フォーム機能は現在準備中です。',
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="relative">
      <div className="space-y-2 p-2">
        <Input
          type="email"
          icon={<SiMaildotru />}
          placeholder="メールアドレス"
        />
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
          <RichTextEditor.Toolbar sticky stickyOffset={0} className="sp:hidden">
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
          <Button
            onClick={handleSubmit}
            loading={isLoading}
            disabled={disabled}
            rightIcon={<IoSend />}
          >
            送 信
          </Button>
        </div>
      </div>
      {visibleCover && (
        <div
          className={clsx(
            'absolute top-0 z-10 h-[384px] w-full cursor-pointer rounded-md bg-slate-800 text-white',
            'flex items-center justify-center',
            'origin-[5%_6px] transition duration-500',
            openForm
              ? 'rotate-[100deg] opacity-0'
              : 'opacity-40 hover:rotate-[2deg]'
          )}
          onClick={() => {
            startAnimation();
            setTimeout(() => hiddenCover(), 500);
          }}
        >
          <div className="flex">
            <div className="font-bold">
              フォームから問い合わせる
              <br />
              （メールアドレス必須）
            </div>
            <MdTouchApp size={44} />
          </div>
        </div>
      )}
    </div>
  );
};
