import type { QuoteBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FC } from 'react';

import { clsx } from '@mantine/core';

import { RichText } from '../../RichText';

type Props = {
  block: QuoteBlockObjectResponse;
};

export const Quote: FC<Props> = ({ block }) => {
  return (
    <blockquote
      className={clsx(
        'relative rounded bg-slate-50 px-6 py-4 text-slate-600',
        'before:content-[""]',
        'before:absolute',
        'before:top-1/2',
        'before:left-1.5',
        'before:-translate-y-1/2',
        'before:w-1',
        'before:h-[85%]',
        'before:rounded-full',
        'before:bg-slate-400',
      )}
    >
      <RichText text={block.quote.rich_text} />
    </blockquote>
  );
};
