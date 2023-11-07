'use client';

import type { FC } from 'react';
import type { NotionPageObjectResponse } from '~/types/notion';

import Link from 'next/link';
import { useMemo } from 'react';

import { toPostMeta } from '~/utils/meta';

type Props = {
  post: NotionPageObjectResponse;
};

export const PostListItem: FC<Props> = ({ post }) => {
  const meta = useMemo(() => toPostMeta(post), [post]);

  return (
    <Link
      className="bg-light flex h-24 cursor-pointer items-center gap-5 rounded px-5 py-3 shadow transition-transform hover:scale-[1.01] sp:relative"
      tabIndex={0}
      href={`/posts/${post.id}`}
    >
      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white shadow sp:absolute sp:-left-2 sp:-top-2 sp:h-9 sp:w-9">
        <div className="pb-1 text-3xl sp:text-base">{meta.icon}</div>
      </div>

      <div className="flex w-full justify-between gap-3">
        <h3 className="line-clamp-2 font-bold sp:text-base">{meta.title}</h3>
        <p className="whitespace-nowrap font-firaCode text-sm font-bold sp:absolute sp:right-2 sp:top-1.5 sp:text-xs">
          &quot;{meta.date}&quot;
        </p>
      </div>
    </Link>
  );
};
