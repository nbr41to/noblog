import type { FC } from 'react';
import type { NotionPageObjectResponse } from '~/types/notion';

import Image from 'next/image';
import { BsChatText } from 'react-icons/bs';

import { BookIcon, GitHubIcon } from '~/commons/icons';
import { ReadMoreButton } from '~/commons/ReadMoreButton';
import { PostList } from '~/features/notionBlog/PostList';

type Props = {
  posts: NotionPageObjectResponse[];
};

export const IndexTemplate: FC<Props> = ({ posts }) => {
  return (
    <div>
      <div className="mt-2 w-full bg-slate-800 py-8 text-orange-100">
        <div className="mx-auto w-fit text-right">
          <div className="font-sans text-4xl font-bold sp:text-3xl">
            Obedience to Curiosity
          </div>
          <div className="mt-1 font-sans text-sm">好奇心に従順に生きる</div>
        </div>
      </div>

      <div className="w-main mx-auto mt-4 space-y-4 px-4 pb-10">
        <div>
          <h2 className="flex items-center gap-1 text-lg font-bold">
            最新の記事5件
            <BookIcon size={20} />
          </h2>
          <div className="mt-3">
            <PostList posts={posts} />
          </div>
          <div className="ml-auto mt-4 w-fit">
            <ReadMoreButton href="/posts" />
          </div>
        </div>

        <div>
          <h2 className="flex items-center gap-1 text-lg font-bold">
            <GitHubIcon size={20} />
            GitHubの草w
          </h2>
          <div className="relative mx-auto h-32 w-full sp:h-20">
            <Image
              className="h-full w-full object-contain"
              src="https://github-contributions-api.deno.dev/nbr41to.svg?no-legend=true&no-total=true&scheme=blue"
              alt="GitHub Contributions"
              fill
              sizes="800px"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* <div>
          <h2 className="text-base font-bold">今年の抱負</h2>
          <div></div>
        </div> */}

        <div>
          <h2 className="flex items-center gap-1 text-lg font-bold">
            この Blog について
            <BsChatText size={20} />
          </h2>
          <p className="px-4 py-2 leading-loose">
            Next.js, TypeScript, Tailwind CSS, Mantine UI, SWR, Next Auth
            などのモダンな技術をふんだんに使って構築した Webアプリに Notion API
            を使って Notion の Database に追加した記事を SSG
            して表示しています。手軽に node.js のランタイムを利用できる Next.js
            は本当に便利です。 また、自分の趣味の開発が手軽にできる Sandbox
            としての役割も担えるようにカスタマイズしています。
          </p>
          <div className="ml-auto w-fit">
            <ReadMoreButton
              href="https://github.com/nbr41to/noblog"
              blank
              rightIcon={<GitHubIcon size={20} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
