'use client';

import type { FC } from 'react';

import { BsChatText } from 'react-icons/bs';

import { GitHubIcon } from '~/components/@commons/icons';
import { ReadMoreButton } from '~/components/@commons/ReadMoreButton';

export const About: FC = () => {
  return (
    <div className="bg-light rounded px-6 py-4 shadow">
      <h2 className="flex items-center gap-1 text-lg font-bold">
        この Blog について
        <BsChatText size={20} />
      </h2>
      <p className="py-2 leading-loose">
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
  );
};
