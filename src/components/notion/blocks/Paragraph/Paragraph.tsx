import type { FC } from 'react';

import { RichText } from '../../RichText';

type Props = {
  block: any;
};

export const Paragraph: FC<Props> = ({ block }) => {
  return (
    <div className="">
      <RichText text={block.paragraph.rich_text} />
    </div>
  );
};
