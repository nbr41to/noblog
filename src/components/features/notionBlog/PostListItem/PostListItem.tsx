import type { FC } from 'react';
import type { NotionPageObjectResponse } from '~/types/notion';

import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { toPostMeta } from '~/utils/meta';

type Props = {
  post: NotionPageObjectResponse;
};

export const PostListItem: FC<Props> = ({ post }) => {
  const router = useRouter();
  const meta = useMemo(() => toPostMeta(post), [post]);

  return (
    <div
      className="flex h-24 cursor-pointer items-center gap-5 rounded bg-orange-50 px-5 py-3 shadow transition-transform hover:scale-105 sp:relative"
      onClick={() => router.push(`/posts/${post.id}`)}
    >
      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white shadow sp:absolute sp:-top-2 sp:-left-2 sp:h-9 sp:w-9">
        <div className="pb-1 text-3xl sp:text-base">{meta.icon}</div>
      </div>

      <div className="flex w-full justify-between gap-3">
        <h3 className="font-bold line-clamp-2 sp:text-base">{meta.title}</h3>
        <p className="whitespace-nowrap text-sm font-bold sp:absolute sp:top-1.5 sp:right-2 sp:text-xs">
          {meta.date}
        </p>
      </div>
    </div>
  );
};
