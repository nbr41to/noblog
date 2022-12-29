import type { ToDoBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FC } from 'react';

import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

import { RichText } from '../../RichText';

type Props = {
  block: ToDoBlockObjectResponse;
};

export const ToDo: FC<Props> = ({ block }) => {
  return (
    <li className='flex list-none items-center'>
      <input
        className='hidden'
        type='checkbox'
        checked={block.to_do.checked}
        disabled
      />
      <div className='pt-0.5'>
        {block.to_do.checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
      </div>
      <span className='ml-2'>
        <RichText text={block.to_do.rich_text} />
      </span>
    </li>
  );
};
