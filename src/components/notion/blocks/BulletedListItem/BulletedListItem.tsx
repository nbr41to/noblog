import type { BulletedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FC } from 'react';

import { RichText } from '../../RichText';

type Props = {
  block: BulletedListItemBlockObjectResponse;
};

export const BulletedListItem: FC<Props> = ({ block }) => {
  return (
    <li className=''>
      <RichText text={block.bulleted_list_item.rich_text} />
    </li>
  );
};
