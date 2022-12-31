import type { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FC } from 'react';

import NextImage from 'next/image';

type Props = {
  block: ImageBlockObjectResponse;
};

export const Image: FC<Props> = ({ block }) => {
  const url = block.image.type === 'file' ? block.image.file.url : '';
  const caption =
    block.image.caption.length > 0 ? block.image.caption[0].plain_text : '';

  return (
    <div className="relative mx-auto aspect-square max-w-[520px]">
      <NextImage
        className="object-contain"
        src={url}
        alt={caption || ''}
        fill
        sizes="(max-width: 640px) 100vw, 520px"
        priority
      />
    </div>
  );
};
