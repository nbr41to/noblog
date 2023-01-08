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
- エラーハンドリング周りの実装
- `__tests__`の追加
- ログイン機能（tw,gh,ggl）
- Routing の Object を作る（titleEnum を作る）
- meta と json-ld を整理したい
- OGP 画像をおしゃれにする
  - https://zenn.dev/hiromu617/articles/c03fef6f4d6c6e
  - https://www.newt.so/docs/tutorials/vercel-og-image-generation
- Tweets list の追加
- 謎解きギミックの追加
- カルーセル作ってみる
- Index のコンテンツを Notion にしてみる
- NavMenu の上部だけを紺にしたい
- SSR やりたい
- 便利なメソッドを Utils UI としてを実装し, 謎解きのギミックに使う
- トグル Block の対応
- Oura Ring API の追加

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
- [@vercel/og](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation)
- [Recoil](https://recoiljs.org/)
- [SWR](https://swr.vercel.app/)
- [axios](https://axios-http.com/)
- [tiptap](https://tiptap.dev/)
- [next-seo](https://github.com/garmeeh/next-seo)
- [Algolia](https://www.algolia.com/)
- [github-contributions-api](https://github.com/kawarimidoll/deno-github-contributions-api)

## ESlint

### plugins

```sh
yarn add -D prettier eslint-config-prettier eslint-plugin-import eslint-plugin-unused-imports @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
