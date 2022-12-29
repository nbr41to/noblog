import type { NotionBlockObjectResponse } from '@/types/notion';
import type { FC } from 'react';

import { blockToJsx } from '@/components/notion/blockToJsx';

type Props = {
  blocks: NotionBlockObjectResponse[];
};

export const PostContent: FC<Props> = ({ blocks }) => {
  return (
    <div className='rounded bg-white px-10 py-8'>
      {blocks.map((block) => blockToJsx(block))}
    </div>
  );
};
