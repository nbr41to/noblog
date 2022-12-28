import type { FC } from 'react';

import { RichText } from '../../RichText';

type Props = {
  block: any;
};

export const ToDo: FC<Props> = ({ block }) => {
  return (
    <li className="flex list-none">
      <input type="checkbox" checked={block.to_do.checked} disabled />
      <span className="ml-2">
        <RichText text={block.to_do.rich_text} />
      </span>
    </li>
  );
};
