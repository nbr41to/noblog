# noblog is my notion blog

## feature

- Notion を公開ページにしなくても API でデータを取得できる
- 対応していないブロックが多い
- しかも,対応していないブロックはテキストを 1 文字も取れない
- 取得できる単位は database と page と block
- block は 2 つ先のネストまでは取れない
- `block[type].text`は配列で, annotation 使うと分断される
- toggle の中身を表示するには children をまた fetch するしかない
