import type { FC } from 'react';
import type { NotionPageObjectResponse } from '~/types/notion';

import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { toPostMeta } from '~/utils/meta';

type Props = {
  post: NotionPageObjectResponse;
};

export const PostGridItem: FC<Props> = ({ post }) => {
  const router = useRouter();
  const meta = useMemo(() => toPostMeta(post), [post]);

  return (
    <div
      className="h-64 w-52 cursor-pointer rounded bg-orange-50 px-5 py-3 shadow transition-transform hover:scale-105"
      onClick={() => router.push(`/posts/${post.id}`)}
    >
      <div className="space-y-3">
        <div className="flex justify-between">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-4xl shadow">
            <div className="pb-1 text-3xl">{meta.icon}</div>
          </div>
          <div className="text-right text-sm">
            <div>{meta.date}</div>
            <div className="font-bold">{meta.category}</div>
          </div>
        </div>

        <div className="flex h-20 items-center">
          <h3 className="overflow-hidden font-bold line-clamp-3">
            {meta.title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-1">
          {meta.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-slate-200 px-3 py-1 text-xs font-bold text-gray-800"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
