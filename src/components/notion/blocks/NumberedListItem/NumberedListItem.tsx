import type { FC } from 'react';

import { RichText } from '../../RichText';

type Props = {
  block: any;
};

export const NumberedListItem: FC<Props> = ({ block }) => {
  return (
    <li className="">
      <RichText text={block.numbered_list_item.rich_text} />
    </li>
  );
};
