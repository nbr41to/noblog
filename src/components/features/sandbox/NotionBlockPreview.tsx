import type { FC } from 'react';
import type { NotionBlockObjectResponse } from '~/types/notion';

import { ActionIcon, Collapse } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { useState } from 'react';
import { VscJson } from 'react-icons/vsc';

import { blockToJsx } from '~/components/notion/blockToJsx';

type Props = {
  blocks: NotionBlockObjectResponse[];
};

export const NotionBlockPreview: FC<Props> = ({ blocks }) => {
  const [openedIds, setOpenedIds] = useState<string[]>([]);

  return (
    <div className="space-y-4 rounded bg-white p-6 sp:rounded-none sp:px-3">
      {blocks.map((block) => {
        // 最初の2文字が "//" の場合は表示しない
        if (
          block.type == 'paragraph' &&
          (block.paragraph.rich_text.length === 0 ||
            block.paragraph.rich_text[0].plain_text.slice(0, 2) === '//')
        ) {
          return null;
        }

        return (
          <div
            key={block.id}
            id={block.id}
            className="rounded border border-solid border-slate-800"
          >
            <div className="flex">
              <div className="flex-grow p-4">{blockToJsx(block)}</div>
              <div className="flex items-center justify-center border-0 border-l border-solid border-slate-800 px-3 sp:hidden">
                <ActionIcon
                  className="bg-slate-200 text-slate-800 hover:bg-slate-300"
                  size="lg"
                  onClick={() => {
                    if (openedIds.includes(block.id)) {
                      setOpenedIds(openedIds.filter((id) => id !== block.id));
                    } else {
                      setOpenedIds([...openedIds, block.id]);
                    }
                  }}
                >
                  {openedIds.includes(block.id) ? '×' : <VscJson size={20} />}
                </ActionIcon>
              </div>
            </div>

            <Collapse
              in={openedIds.includes(block.id)}
              transitionDuration={300}
            >
              <hr />
              <p className="flex items-center justify-center gap-1 font-firaCode">
                JSON
                <VscJson />
              </p>
              <Prism className="p-3" language="json" colorScheme="dark">
                {JSON.stringify(block, null, 2)}
              </Prism>
            </Collapse>
          </div>
        );
      })}
    </div>
  );
};
