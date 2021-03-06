# noblog

このブログもしくは, 私に興味を持っていただきありがとうございます！
このブログは主に NotionAPI（現在 Public BETA 版）と React のフレームワークである Next.js を使って作成されています.
残念ながら,プログラミングの知識がないと簡単に作成することはできませんが,
今後は Notion を使っている人が手軽に Notion Blog を運営できるような仕組みを考えております.
GitHub にソースコードを公開してますので,拙いコードですが少しでも参考になれば幸いです.

## Nob を支える技術

- Next.js
- typescript
- Node.js
- Notion API
- notion-sdk-js
- styled-components
- Google Analytics
- Google AdSense
- react-syntax-highlighter
- MDX
- storybook
- eslint
- prettier
- husky
- lint-staged
- github
- ogp-parser

## 主な作成手順（ざっくばらん）

1. [Notion API](https://developers.notion.com/) を公式が提供する [JavaScriptSDK](https://github.com/makenotion/notion-sdk-js) を使って自分の Notion のデータベースの情報を取得す
2. 取得したデータベースの情報から今度は Page に関する情報や含まれる Blocks を取得します.
3. 取得した Block 一つ一つのプロパティに応じた分岐処理や Component を作成します.
   [公式](https://developers.notion.com/reference/block)にも記載がありますが,[Notion の各 Block のプロパティ一覧兼プレビューページ](https://noblog.nbr41.com/blogs/notion-preview)を作りました.
4. 型に関しては [JavaScriptSDK](https://github.com/makenotion/notion-sdk-js) から import しつつ頑張る.

[API で取得した Notion Block 一覧](https://noblog.nbr41.com/blogs/notion-preview)
