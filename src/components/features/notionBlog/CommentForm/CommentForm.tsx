import type { FC } from 'react';
import type { NotionRichTextItemRequest } from '~/types/notion';

import { ActionIcon, Button, Kbd, Tooltip } from '@mantine/core';
import { getHotkeyHandler, useOs } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { Link, RichTextEditor } from '@mantine/tiptap';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { LogoutIcon, SendIcon } from '~/commons/icons';
import { toRichText } from '~/utils/toRichText';
import { baseUrl } from '~/utils/url';

type Props = {
  onSubmit: (rich_text: NotionRichTextItemRequest[]) => Promise<void>;
};

export const CommentForm: FC<Props> = ({ onSubmit }) => {
  const router = useRouter();
  const { data: session } = useSession();
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

  const toLoginPage = () => {
    router.push({
      pathname: '/login',
      query: {
        callback: router.asPath,
      },
    });
  };

  const handleSubmit = async () => {
    if (disabled) return;
    if (session?.user?.name && session?.user?.email) {
      setIsLoading(true);
      const rich_text = toRichText(editor.getJSON());
      await onSubmit(rich_text);
      editor.commands.setContent('');
      setIsLoading(false);
    } else {
      showNotification({
        title: 'Error',
        message: 'アカウントに名前もしくはメールアドレスがありません。',
        color: 'red',
      });
    }
  };

  return (
    <div className="">
      {!session ? (
        <div className="sp:px-4">
          <Button fullWidth onClick={toLoginPage}>
            ログインしてコメントをする
          </Button>
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
            <RichTextEditor.Toolbar
              sticky
              stickyOffset={0}
              className="sp:hidden"
            >
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
            <div className="pl-2 text-sm font-bold text-slate-400">
              {session.user?.name} | {session.user?.email} でログイン中
            </div>
            <Tooltip
              position="bottom-end"
              arrowPosition="center"
              transitionDuration={300}
              withArrow
              label={<div className="text-xs">ログアウトする</div>}
            >
              <ActionIcon
                color="dark"
                className="text-slate-400"
                onClick={() =>
                  signOut({
                    callbackUrl: baseUrl + router.asPath,
                  })
                }
              >
                <LogoutIcon size={18} />
              </ActionIcon>
            </Tooltip>
            <Tooltip
              position="top-end"
              arrowPosition="center"
              transition="pop-top-right"
              transitionDuration={300}
              withArrow
              color="orange"
              label={
                <div className="space-y-3 p-2 text-center text-sm">
                  <Kbd>{os === 'windows' ? 'Ctrl' : '⌘'} + Enter</Kbd>
                  でも送信できます。
                </div>
              }
            >
              <Button
                onClick={handleSubmit}
                loading={isLoading}
                disabled={disabled}
                rightIcon={<SendIcon />}
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
