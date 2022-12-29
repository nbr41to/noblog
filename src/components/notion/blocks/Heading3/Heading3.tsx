import type { FC } from 'react';

import { MdOutlineArrowRight } from 'react-icons/md';

import { RichText } from '../../RichText';



type Props = {
  block: any;
};

export const Heading3: FC<Props> = ({ block }) => {
  return (
    <h3
      id={block.id}
      className='my-4 flex items-center border-0 border-b-2 border-solid border-slate-800 text-lg font-bold'
    >
      <MdOutlineArrowRight size={24} />
      <RichText text={block.heading_3.rich_text} />
    </h3>
  );
};
