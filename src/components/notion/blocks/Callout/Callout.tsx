import type { FC } from 'react';

import { RichText } from '../../RichText';

type Props = {
  block: any;
};

export const Callout: FC<Props> = ({ block }) => {
  const { emoji } = block.callout.icon;

  return (
    <div className="flex items-center gap-4 rounded border border-solid border-slate-300 p-4 shadow">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200">
        {emoji}
      </div>
      <div>
        <RichText text={block.callout.rich_text} />
      </div>
    </div>
  );
};
