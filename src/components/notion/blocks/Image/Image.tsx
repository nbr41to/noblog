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
                // 取得し直すロジックを再検討する https://alpacat.com/blog/solution-to-image-url-expiration/#%E5%AF%BE%E7%AD%962:%20%E3%82%AF%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%88%E5%81%B4%E3%81%A7%E6%9C%9F%E9%99%90%E5%88%87%E3%82%8C%E3%82%92%E5%88%A4%E5%AE%9A%E3%81%97%E3%81%A6%E7%94%BB%E5%83%8FURL%E3%82%92%E5%8F%96%E5%BE%97%E3%81%97%E7%9B%B4%E3%81%99
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
