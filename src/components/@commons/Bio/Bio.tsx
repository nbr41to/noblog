import type { FC } from 'react';

import Image from 'next/image';

import { GitHubIcon, TwitterIcon } from '~/commons/icons';

export const Bio: FC = () => {
  return (
    <div className="rounded bg-white p-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs">Create by</div>
          <div className="text-lg font-bold leading-tight">nobuyuki.K</div>
          <div className="mt-2 space-x-2 text-slate-800">
            <a
              className="text-slate-800"
              href="https://twitter.com/Knob_nbr41to"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon size={24} />
            </a>
            <a
              className="text-slate-800"
              href="https://github.com/nbr41to"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon size={24} />
            </a>
          </div>
        </div>
        <div className="relative h-14 w-14  rounded-full border border-solid border-slate-400">
          <Image
            className="rounded-full object-cover"
            src="/nob_lego.jpg"
            alt="my icon"
            fill
            sizes="100px"
            priority
          />
        </div>
      </div>

      <div className="mt-3 text-sm leading-relaxed">
        学校の先生→Web系エンジニア
        <br />
        Next.js / TypeScript / TailwindCSS / Notion が好き。
      </div>
    </div>
  );
};
