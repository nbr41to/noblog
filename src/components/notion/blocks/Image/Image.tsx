import type { FC } from 'react';

import NextImage from 'next/image';

type Props = {
  block: any;
  // block: ImageBlockObjectResponse;
};

export const Image: FC<Props> = ({ block }) => {
  const url = block.image?.file?.url;
  const caption = block.image?.caption?.plain_text;

  return (
    <div className='relative mx-auto aspect-square max-w-[520px]'>
      <NextImage
        className='object-contain'
        src={url}
        alt={caption || ''}
        fill
      />
    </div>
  );
};
