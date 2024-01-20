'use client';

import type { FC } from 'react';
import type { NotionPageObjectResponse } from '~/types/notion';

import Link from 'next/link';
import { useMemo } from 'react';

import { toPostMeta } from '~/utils/meta';

type Props = {
  post: NotionPageObjectResponse;
};

export const PostGridItem: FC<Props> = ({ post }) => {
  const meta = useMemo(() => toPostMeta(post), [post]);

  return (
    <Link
      className="h-64 w-64 cursor-pointer rounded bg-orange-50 px-5 py-3 shadow transition-transform hover:scale-101 dark:bg-slate-700 sp:w-80"
      tabIndex={0}
      href={`/posts/${post.id}`}
    >
      <div className="space-y-3">
        <div className="flex justify-between">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-4xl shadow">
            <div className="pb-1 text-3xl">{meta.icon}</div>
          </div>
          <div className="text-right font-mono text-xs">
            <div>&quot;{meta.date}&quot;</div>
            <div className="font-bold">{meta.category.name}</div>
          </div>
        </div>

        <div className="flex h-24">
          <h3 className="line-clamp-3 overflow-hidden font-bold">
            {meta.title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-1">
          {meta.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-gray-800"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
