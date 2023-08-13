import type { FC } from 'react';

import { ActionIcon, Button, LoadingOverlay, Tooltip } from '@mantine/core';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';

import { LogoutIcon } from '~/commons/icons';
import { baseUrl } from '~/utils/url';

type Props = {
  // onSubmit: (rich_text: NotionRichTextItemRequest[]) => Promise<void>;
};

export const CommentForm: FC<Props> = () => {
  const router = useRouter();
  const { data: session } = useSession();
  // const [isLoading, setIsLoading] = useState(false);
  // const editor = useEditor({
  //   extensions: [
  //     StarterKit,
  //     Underline,
  //     Link,
  //     Placeholder.configure({ placeholder: 'コメントを入力してください。' }),
  //   ],
  //   content: '',
  // });
  // const disabled = isLoading || !editor || !editor.getText();
  // const os = useOs();

  const toLoginPage = () => {
    router.push({
      pathname: '/login',
      query: {
        callback: router.asPath,
      },
    });
  };

  // const handleSubmit = async () => {
  //   if (disabled) return;
  //   if (session?.user?.name && session?.user?.email) {
  //     setIsLoading(true);
  //     const rich_text = toRichText(editor.getJSON());
  //     await onSubmit(rich_text);
  //     editor.commands.setContent('');
  //     setIsLoading(false);
  //   } else {
  //     showNotification({
  //       title: 'Error',
  //       message: 'アカウントに名前もしくはメールアドレスがありません。',
  //       color: 'red',
  //     });
  //   }
  // };

  return (
    <div className="relative">
      <LoadingOverlay
        visible={typeof session === 'undefined'}
        overlayBlur={2}
      />
      {!session ? (
        <div className="sp:px-4">
          <Button fullWidth onClick={toLoginPage}>
            ログインしてコメントをする
          </Button>
        </div>
      ) : (
        <div>
          {/* <RichTextEditor
            editor={editor}
            onSubmit={handleSubmit}
            hotkey="mod+Enter"
          /> */}
          <div>RichTextEditorの保守性悪すぎてEditor使えません</div>

          <div className="mt-2 flex items-center justify-end gap-3">
            <div className="pl-2 text-sm font-bold text-slate-400">
              {session.user?.name} | {session.user?.email} でログイン中
            </div>
            <Tooltip
              position="bottom-end"
              arrowPosition="center"
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
            {/* <Tooltip
              position="top-end"
              arrowPosition="center"
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
            </Tooltip> */}
          </div>
        </div>
      )}
    </div>
  );
};
