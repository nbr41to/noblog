import type { FC } from 'react';

type Props = {
  // onSubmit: (rich_text: NotionRichTextItemRequest[]) => Promise<void>;
};

export const ContactForm: FC<Props> = () => {
  // const [openForm, startAnimation] = useReducer(() => true, false);
  // const [visibleCover, hiddenCover] = useReducer(() => false, true);

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

  // const handleSubmit = async () => {
  //   if (disabled) return;
  //   setIsLoading(true);

  //   const completed = false;
  //   if (completed) {
  //     // eslint-disable-next-line no-console
  //     console.log(onSubmit);
  //   } else {
  //     showNotification({
  //       title: 'フォーム機能は現在準備中です。',
  //       message: 'すんまそん🥹',
  //     });
  //   }
  //   setIsLoading(false);
  // };

  return (
    <div className="relative">
      <div>壊れました悲しいです</div>
      {/* <div className="space-y-2 p-2">
        <Input type="email" icon={<AtIcon />} placeholder="メールアドレス" />
        <RichTextEditor
          editor={editor}
          hotkey="mod+Enter"
          onSubmit={handleSubmit}
        />
        <div className="mt-2 flex items-center justify-end gap-3">
          <Button
            onClick={handleSubmit}
            loading={isLoading}
            disabled={disabled}
            rightIcon={<SendIcon />}
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
            <TouchIcon size={44} />
          </div>
        </div>
      )} */}
    </div>
  );
};
