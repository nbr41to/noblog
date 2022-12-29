import type { FC } from 'react';

import { AiOutlineBlock } from 'react-icons/ai';

import { RichText } from '../../RichText';



type Props = {
  block: any;
};

export const Heading2: FC<Props> = ({ block }) => {
  return (
    <h2
      id={block.id}
      className='my-6 flex items-center gap-2 px-3 text-xl shadow-[-1px_-1px_6px_#ccc,4px_4px_1px_#1E293B]'
    >
      <AiOutlineBlock size={24} />
      <RichText text={block.heading_2.rich_text} />
    </h2>
  );
};
