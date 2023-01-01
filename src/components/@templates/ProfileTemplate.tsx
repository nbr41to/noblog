import type { FC } from 'react';

import Image from 'next/image';

import { PageTitle } from '~/commons/PageTitle';

export const ProfileTemplate: FC = () => {
  return (
    <div>
      <PageTitle title="Profile" />
      <div className="w-main space-y-3 break-words rounded bg-white p-6 leading-loose">
        <div className="Story relative mx-auto h-40 w-40 overflow-hidden rounded-full border-2 border-solid border-slate-300">
          <Image
            src="/nob_lego.jpg"
            alt="my icon"
            fill
            className="object-cover"
          />
        </div>

        <h2>profile</h2>
        <p>Nobuyuki Kobayashi</p>
        <div>
          <h3>Interests / Relations</h3>
          <p>
            教育 脳科学 心理学 HSP 数学 Technology ICT ブロックチェーン
            プログラミング Notion React TypeScript AWS Firebase GraphQL Node.js
            Golang 健康 Biohack Antiaging ルービックキューブ スノボー サッカー
            バレーボール ダンス アニメ ゲーム
          </p>
        </div>

        <div>
          <h3>Story</h3>
          <p>
            中央大学数学科を卒業し、数学科の専任講師として私立の中高一貫校で 6
            年間教壇をとった。しかし、馴染みのある伝統的な教育は、変化の激しい現代では無力であることを痛感。こどもの未来を幸せにする教育ができる人になれるようにと自分と約束を交わし、スキル磨きのため退職。半年間プログラミングと心理学を独学する。その成長を資産にフリーランスとして独立し、主に
            React
            を使ったフロントエンド開発を担っている。教育に携わってきた経験を武器に、プログラミングの講師としても活動。また、心理支援のスキルを磨くため、公認心理士の資格取得に向けて勉強中。いつでもどこにいても
            誰かの先生になれるように Nomad Teacher
            としての第二の人生を歩み出した。
          </p>
        </div>
        <p className="text-right text-slate-400">
          memo:ここはNotionのページを表示するように変更する
        </p>
      </div>
    </div>
  );
};
