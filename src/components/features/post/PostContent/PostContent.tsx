import { blockToJsx } from '@/components/notion/blockToJsx';
import { NotionBlockObjectResponse } from '@/types/notion';
import { FC } from 'react';

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
