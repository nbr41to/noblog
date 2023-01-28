import type { FC } from 'react';
import type { NotionBlockObjectResponse } from '~/types/notion';

import { clsx } from '@mantine/core';
import { useState, useEffect, useMemo } from 'react';
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
            block[type]?.rich_text
              ? // @ts-expect-error ignore
                block[type]?.rich_text[0]?.plain_text
              : `empty: ${type}`;

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
      <div className="mt-4 max-h-[456px] overflow-y-scroll">
        <div
          className={clsx(
            'relative flex flex-col gap-2 py-2 pl-6 text-sm',
            'before:absolute before:top-3 before:left-2 before:h-[calc(100%-24px)] before:w-0.5 before:bg-orange-200 before:content-[""]'
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
                item.type === 'heading_3' && 'pl-3',
                'before:absolute before:rounded-full before:border-solid before:border-white before:content-[""]',
                item.type === 'heading_2'
                  ? 'before:top-[3px] before:-left-[22px] before:h-[10px] before:w-[10px] before:border-[2px]'
                  : 'before:top-[7px] before:-left-[19px] before:h-[6px] before:w-[6px] before:border-[1px]',
                activeIndex < index
                  ? 'before:bg-orange-200'
                  : 'before:border-orange-100 before:bg-orange-500'
              )}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
