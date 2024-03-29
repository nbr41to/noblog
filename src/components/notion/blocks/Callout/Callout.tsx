import type { CalloutBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FC } from 'react';

import { useMemo } from 'react';

import { RichText } from '~/components/notion/RichText';

type Props = {
  block: CalloutBlockObjectResponse;
};

export const Callout: FC<Props> = ({ block }) => {
  const emoji = useMemo(() => {
    if (!!block.callout.icon && block.callout.icon.type === 'emoji')
      return block.callout.icon.emoji;

    return '📣';
  }, [block.callout.icon]);

  return (
    <div className="flex items-center gap-4 rounded border border-solid border-slate-300 p-4 shadow">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200">
        {emoji}
      </div>
      <div className="sp:text-sm">
        <RichText text={block.callout.rich_text} />
      </div>
    </div>
  );
};
