/* eslint-disable no-console */
import type { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FC } from 'react';

import { Button } from '@mantine/core';
import NextImage from 'next/image';
import { useState } from 'react';

import { DangerIcon, UpdateIcon } from '~/commons/icons';

type Props = {
  block: ImageBlockObjectResponse;
};

export const Image: FC<Props> = ({ block }) => {
  const url = block.image.type === 'file' ? block.image.file.url : '';
  const caption =
    block.image.caption.length > 0 ? block.image.caption[0].plain_text : '';
  const [isError, setIsError] = useState(false);

  return (
    <div className="relative mx-auto aspect-square max-w-[520px]">
      <NextImage
        className="object-contain"
        src={url}
        alt={caption || ''}
        fill
        sizes="(max-width: 640px) 100vw, 520px"
        priority
        onError={(e) => {
          console.error(e);
          setIsError(true);
        }}
      />
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div
              className="mx-auto mt-1 w-60 text-ellipsis text-sm line-clamp-1"
              title={url}
            >
              {url}
            </div>
            <div className="item-center mt-2 flex gap-2 text-2xl font-bold">
              <DangerIcon size={36} />
              画像の取得に失敗しました 🥺
            </div>
            <div className="mt-3">
              <Button
                rightIcon={<UpdateIcon size={20} />}
                onClick={() => window.location.reload()}
              >
                更新する
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
