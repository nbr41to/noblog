# noblog

## Features

- Notion の Database を Blog の記事として表示
- Table of contents がだいぶいい感じ
- 記事ごとのいいね・コメント機能（連投防止も）
- Zenn の記事一覧
- Admin 画面
- GA やらなきゃ

### Todo

- Comments 表示の Loading を表示してみる
- IP アドレスに紐づく一意性のいいね機能
- エラーハンドリング周りの実装
- `__tests__`の追加
- `__mocks__`の整理
- Roma 試す
- 謎解きギミックの追加
- Category と Tag による絞り込み
- Tweets list の追加
- ログインしないとコメントができないように
- コメント送信時に最後の気あ行は削除するように
- Routing の Object を作る
- meta と json-ld を整理したい
- bookmark に縦線入れる
- コメントの empty UI
- link_preview 対応 多分 GitHub リンク

## Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Mantine](https://mantine.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/)
- [Storybook](https://storybook.js.org/)
- [Notion](https://www.notion.so/)
- [Notion API](https://developers.notion.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vercel](https://vercel.com/)
- [Recoil](https://recoiljs.org/)
- [SWR](https://swr.vercel.app/)
- [axios](https://axios-http.com/)
- [tiptap](https://tiptap.dev/)
- [next-seo](https://github.com/garmeeh/next-seo)

- [Algolia](https://www.algolia.com/)

## ESlint

### plugins

```sh
yarn add -D prettier eslint-config-prettier eslint-plugin-import eslint-plugin-unused-imports @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
