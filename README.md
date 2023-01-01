# noblog

## Features

- Notion の Database を Blog の記事として表示
- Table of contents がだいぶいい感じ
- 記事ごとのいいね・コメント機能（連投防止も）
- Zenn の記事一覧
- Admin 画面
- Google Analytics の追加

### Todo

- Comments 表示の Loading を表示してみる
- IP アドレスに紐づく一意性のいいね機能
- エラーハンドリング周りの実装
- `__tests__`の追加
- `__mocks__`の整理
- Roma 試す
- Category と Tag による絞り込み
- ログイン機能（tw,gh,ggl）
- ログインしないとコメントができないように
- コメント送信時に最後の改行は削除するように
- Routing の Object を作る（titleEnum を作る）
- meta と json-ld を整理したい
- コメントの empty UI
- OGP 画像が表示されてない
- OGP 画像を動的に作ってみる
- Tweets list の追加
- 謎解きギミックの追加
- Algolia の導入
- bookmark の OGP を SSG にする
- Image の 取得失敗時の挙動
- bookmark に縦線入れる
- コメントの empty UI

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
