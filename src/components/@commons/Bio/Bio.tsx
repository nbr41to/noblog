import type { FC } from "react";

import Image from "next/image";
import { BsGithub, BsTwitter } from "react-icons/bs";

export const Bio: FC = () => {
  return (
    <div className="rounded bg-white p-6">
      <div className="flex justify-between gap-4">
        <div>
          <div className="text-lg font-bold">nobuyuki.K</div>
          <div className="mt-3 space-x-2 text-slate-800">
            <a
              className="text-slate-800"
              href="https://twitter.com/Knob_nbr41to"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter size={24} />
            </a>
            <a
              className="text-slate-800"
              href="https://github.com/nbr41to"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub size={24} />
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
