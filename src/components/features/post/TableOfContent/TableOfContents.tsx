import type { NotionBlockObjectResponse } from '@/types/notion';
import type { FC } from 'react';

import { clsx } from '@mantine/core';
import { useMemo } from 'react';

type Props = {
  blocks: NotionBlockObjectResponse[];
  isAll?: boolean;
};

export const TableOfContents: FC<Props> = ({ blocks, isAll = false }) => {
  const headingList = useMemo(
    () =>
      blocks.flatMap((block) => {
        if (isAll) {
          const type = block.type;
          const title =
            // @ts-expect-error ignore
            !!block[type]?.rich_text
              ? // @ts-expect-error ignore
                block[type]?.rich_text[0]?.plain_text
              : 'empty: ' + type;

          return {
            id: block.id,
            type,
            title,
          };
        }
        if (block.type === 'heading_2') {
          return {
            id: block.id,
            type: block.type,
            title: block.heading_2.rich_text[0].plain_text,
          };
        }
        if (block.type === 'heading_3') {
          return {
            id: block.id,
            type: block.type,
            title: block.heading_3.rich_text[0].plain_text,
          };
        }

        return [];
      }),
    [blocks],
  );

  return (
    <div className='w-64 rounded bg-white p-4'>
      <div className='text-center font-baloo text-lg'>
        - Table of contents -
      </div>
      <div className='mx-auto mt-1 h-0.5 w-20 rounded-full bg-slate-800' />

      <div className='mt-4 flex flex-col gap-2 pl-4'>
        {headingList.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={clsx(
              'text-sm text-gray-800 transition-opacity hover:text-gray-900/60',
              item.type === 'heading_3' && 'pl-6',
            )}
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};
