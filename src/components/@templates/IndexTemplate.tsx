import type { FC } from 'react';
import type { NotionPageObjectResponse } from '~/types/notion';

import { ReadMoreButton } from '~/commons/ReadMoreButton';
import { PostList } from '~/features/notionBlog/PostList';

type Props = {
  posts: NotionPageObjectResponse[];
};

export const IndexTemplate: FC<Props> = ({ posts }) => {
  return (
    <div>
      <div className="w-full bg-slate-800 py-8 text-orange-100">
        <div className="mx-auto w-fit text-right">
          <div className="font-sans text-4xl font-bold">
            Obedient to Curiosity
          </div>
          <div className="mt-1 font-sans text-sm">好奇心に従順に生きる</div>
        </div>
      </div>

      <div className="w-main mt-4 space-y-4 px-4">
        <div>
          <h2 className="text-lg font-bold">このblogについて</h2>
          <p className="px-4 py-2 leading-loose">
            Next.js, TypeScript, Tailwind CSS, Mantine UI, SWR, Next Auth
            などのモダンな技術をふんだんに使って構築した Webアプリに Notion API
            を使って Notion の Database に追加した記事を SSG
            して表示しています。手軽に node.js のランタイムを利用できる Next.js
            は本当に便利です。 また、自分の趣味の開発が手軽にできる Sandbox
            としての役割も担えるようにカスタマイズしています。
          </p>
          <div className="text-right">
            <ReadMoreButton href="https://github.com/nbr41to/noblog" blank />
          </div>
        </div>

        {/* <div>
          <h2 className="text-base font-bold">今年の抱負</h2>
          <div></div>
        </div> */}

        <div>
          <h2 className="text-lg font-bold">最新の記事5件</h2>
          <div className="mt-3">
            <PostList posts={posts} />
          </div>
          <div className="mt-2 text-right">
            <ReadMoreButton href="/posts" />
          </div>
        </div>
      </div>
    </div>
  );
};
