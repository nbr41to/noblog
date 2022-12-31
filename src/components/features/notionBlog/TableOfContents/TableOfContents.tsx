import type { FC } from 'react';
import type { NotionBlockObjectResponse } from '~/types/notion';

import { clsx } from '@mantine/core';
import { useState, useEffect } from 'react';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';

import { inViewHeadingIdsAtom } from '~/recoil/atoms';

type Props = {
  blocks: NotionBlockObjectResponse[];
  isAll?: boolean;
};

export const TableOfContents: FC<Props> = ({ blocks, isAll = false }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const inViewHeadingIds = useRecoilValue(inViewHeadingIdsAtom);

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
    [blocks, isAll]
  );

  useEffect(() => {
    const index = headingList.findIndex((item) =>
      inViewHeadingIds.includes(item.id)
    );
    if (index < 0) return;
    setActiveIndex(index);
  }, [headingList, inViewHeadingIds]);

  return (
    <div className="rounded bg-white p-4">
      <div className="text-center font-baloo text-lg">
        - Table of contents -
      </div>
      <div className="mx-auto mt-0.5 h-0.5 w-20 rounded-full bg-slate-800" />
      <div
        className={clsx(
          'relative mt-4 flex max-h-[456px] flex-col gap-2 overflow-y-scroll pl-6 text-sm',
          'before:absolute before:top-4 before:left-[3px] before:h-[calc(100%-24px)] before:w-0.5 before:bg-orange-200 before:content-[""]'
        )}
      >
        {headingList.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={clsx(
              'text relative transition-colors duration-150 hover:text-slate-400',
              activeIndex === index
                ? 'font-bold text-slate-800'
                : 'text-slate-700',
              item.type === 'heading_3' && 'pl-2',
              'before:absolute before:rounded-full before:border-solid before:border-white before:content-[""]',
              item.type === 'heading_2'
                ? 'before:top-[8px] before:-left-[26px] before:h-2 before:w-2 before:border-[2px]'
                : 'before:top-[10px] before:-left-[23px] before:h-1 before:w-1 before:border-[1px]',
              activeIndex < index
                ? 'before:bg-orange-200'
                : 'before:bg-orange-500'
            )}
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};
