# noblog is my notion blog

## feature

- Notion を公開ページにしなくても API でデータを取得できる
- 対応していないブロックが多い
- しかも,対応していないブロックはテキストを 1 文字も取れない
- 取得できる単位は database と page と block
- block は 2 つ先のネストまでは取れない
- `block[type].text`は配列で, annotation 使うと分断される
- toggle の中身を表示するには children をまた fetch するしかない

## Todo

- [ ] ページネーション
- [ ] 記事をクリックした回数を集計
- [ ] カテゴリーをクリックした回数を集計
- [ ] toggle をクリックしたときにデータを fetch するようにする
- [ ] properties のカテゴリーや Tags を選択肢と同じ色を取得して装飾

## Reference

Analytics:

- https://panda-program.com/posts/nextjs-google-analytics
- https://zenn.dev/okumura_daiki/articles/839685a90c06db

Adsense:

- https://b.0218.jp/202104021830.html
