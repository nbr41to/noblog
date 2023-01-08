import type { FC } from 'react';
import type { NotionBlockObjectResponse } from '~/types/notion';

import Image from 'next/image';

import { PageTitle } from '~/commons/PageTitle';
import { blockToJsx } from '~/components/notion/blockToJsx';

type Props = {
  blocks: NotionBlockObjectResponse[];
};

export const ProfileTemplate: FC<Props> = ({ blocks }) => {
  return (
    <div className="space-y-2">
      <PageTitle title="Profile" />

      <div className="w-main mx-auto rounded bg-white py-6 px-10 leading-loose sp:mt-2 sp:px-4">
        <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-2 border-solid border-slate-300">
          <Image
            className="object-cover"
            src="/nob_lego_sm.png"
            alt="my icon"
            fill
            sizes="160px"
          />
        </div>
        {blocks?.map((block) => (
          <div key={block.id}>{blockToJsx(block)}</div>
        ))}
      </div>
    </div>
  );
};
