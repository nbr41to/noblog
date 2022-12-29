import type { NotionBlockObjectResponse } from '@/types/notion';
import type { FC } from 'react';

import { blockToJsx } from '@/components/notion/blockToJsx';

type Props = {
  blocks: NotionBlockObjectResponse[];
};

export const NotionBlockPreview: FC<Props> = ({ blocks }) => {
  return (
    <div className='rounded bg-white p-6'>
      {blocks.map((block) => {
        return (
          <div key={block.id} id={block.id}>
            {blockToJsx(block)}
          </div>
        );
      })}
    </div>
  );
};
