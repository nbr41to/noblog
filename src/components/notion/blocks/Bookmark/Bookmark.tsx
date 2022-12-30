/* eslint-disable @next/next/no-img-element */
import type { Ogp } from '@/types/ogp';
import type { BookmarkBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import type { FC } from 'react';

import { Skeleton } from '@mantine/core';

import { useGetOgp } from '@/hooks/apiHooks/useGetOgp';

type Props = {
  block: BookmarkBlockObjectResponse;
};
type BaseProps = {
  ogp: Ogp | undefined;
  isLoading: boolean;
};

export const Bookmark: FC<Props> = ({ block }) => {
  const { data, isLoading } = useGetOgp(block.bookmark.url);

  return <BaseBookmark ogp={data} isLoading={isLoading} />;
};

export const BaseBookmark: FC<BaseProps> = ({ ogp, isLoading }) => {
  return ogp && !isLoading ? (
    <a
      className='my-6 flex min-h-[120px] cursor-pointer justify-between rounded-lg border border-solid border-slate-400 bg-white hover:bg-slate-100'
      href={ogp.url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='flex max-w-[400px] flex-col justify-center gap-2 overflow-hidden px-6 py-3'>
        <div className='font-bold text-slate-800 line-clamp-2'>{ogp.title}</div>
        <div className='space-y-3 text-sm text-slate-600 line-clamp-2'>
          {ogp.description}
        </div>
        <div className='flex items-center gap-2'>
          <img
            src={ogp.faviconUrl}
            className='h-4 w-4'
            alt='bookmark favicon image'
          />
          <div className='text-xs line-clamp-1'>{ogp?.url}</div>
        </div>
      </div>
      <div>
        {ogp.imageUrl ? (
          <img
            src={ogp.imageUrl}
            className='h-full max-w-[240px] rounded-r-lg object-cover'
            alt='bookmark ogp image'
          />
        ) : (
          <Skeleton className='h-full w-[240px] rounded-l-none rounded-r-lg' />
        )}
      </div>
    </a>
  ) : (
    <article className='my-6 flex h-[120px] w-full justify-between rounded-lg border border-solid border-slate-400 bg-white'>
      <div className='flex w-3/5 flex-col justify-center px-6'>
        <Skeleton height={20} width='60%' />
        <Skeleton height={10} mt={10} />
        <Skeleton height={10} mt={4} />
        <Skeleton height={16} width='80%' mt={10} />
      </div>

      <Skeleton className='h-full w-2/5 rounded-r-lg rounded-l-none' />
    </article>
  );
};
