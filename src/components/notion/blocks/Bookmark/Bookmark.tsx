/* eslint-disable @next/next/no-img-element */
import type { BookmarkBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FC } from 'react';
import type { Ogp } from '~/types/ogp';

import { Skeleton } from '@mantine/core';

type Props = {
  block: BookmarkBlockObjectResponse & { ogp?: Ogp };
};

export const Bookmark: FC<Props> = ({ block }) => {
  const ogp = block.ogp
    ? block.ogp
    : {
        url: block.bookmark.url,
        title: '',
        description: '',
        imageUrl: '',
        faviconUrl: '',
      };
  const noOgp = !ogp.title && !ogp.description && !ogp.imageUrl;

  return !noOgp ? (
    <a
      className="my-6 flex min-h-[120px] cursor-pointer justify-between rounded-lg border border-solid border-slate-400 bg-slate-50 hover:bg-slate-100 sp:flex-col"
      href={ogp.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex max-w-[400px] flex-col justify-center gap-2 overflow-hidden px-6 py-3 sp:py-2 sp:px-4">
        <div className="font-bold text-slate-800 line-clamp-2 sp:text-sm">
          {ogp.title}
        </div>
        <div className="space-y-3 text-sm text-slate-600 line-clamp-2 sp:text-xs">
          {ogp.description}
        </div>
        <div className="flex items-center gap-2">
          <img
            src={ogp.faviconUrl}
            className="h-4 w-4"
            alt="bookmark favicon image"
          />
          <div className="text-xs line-clamp-1">{ogp?.url}</div>
        </div>
      </div>
      <div className="flex items-end">
        {ogp.imageUrl ? (
          <img
            src={ogp.imageUrl}
            className="h-full max-w-[240px] rounded-r-lg object-cover sp:max-w-full sp:rounded-b-lg sp:rounded-t-none"
            alt="bookmark ogp image"
          />
        ) : (
          <Skeleton className="h-full w-[240px] rounded-l-none rounded-r-lg sp:max-w-full sp:rounded-b-lg sp:rounded-t-none" />
        )}
      </div>
    </a>
  ) : (
    /* Loading Skeleton */
    <a
      className="my-6 flex min-h-[120px] w-full cursor-pointer justify-between rounded-lg border border-solid border-slate-400 bg-slate-50 hover:bg-slate-100"
      href={ogp.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex w-3/5 flex-col justify-center px-6">
        <Skeleton height={20} width="60%" />
        <Skeleton height={10} mt={10} />
        <Skeleton height={10} mt={4} />
        <Skeleton height={16} width="80%" mt={10} />
      </div>

      <Skeleton className="h-full w-2/5 rounded-r-lg rounded-l-none" />
    </a>
  );
};
