import type { FC } from "react";
import type { NotionPageObjectResponse } from "~/types/notion";

import { useRouter } from "next/router";
import { useMemo } from "react";

import { toPostMeta } from "~/utils/notion/toPostMeta";

type Props = {
  post: NotionPageObjectResponse;
};

export const PostListItem: FC<Props> = ({ post }) => {
  const router = useRouter();
  const meta = useMemo(() => toPostMeta(post), [post]);

  return (
    <div
      className="flex h-24 cursor-pointer items-center gap-5 rounded bg-orange-50 px-5 py-3 shadow transition-transform hover:scale-105 sp:relative sp:px-3 sp:pt-6"
      onClick={() => router.push(`/posts/${post.id}`)}
    >
      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white shadow sp:absolute sp:-top-4 sp:-left-2 sp:h-9 sp:w-9">
        <div className="pb-1 text-3xl sp:text-base">{meta.icon}</div>
      </div>
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex justify-between gap-3">
          <h3 className="font-bold line-clamp-2 sp:text-base">{meta.title}</h3>
          <p className="whitespace-nowrap text-sm sp:absolute sp:top-1.5 sp:right-2 sp:text-xs">
            {meta.date}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 sp:gap-2">
          <div className="rounded bg-orange-400 px-3 py-1 text-sm font-bold text-white sp:px-2 sp:py-0.5 sp:text-xs">
            {meta.category}
          </div>
          {meta.tags.map((tag, index) => (
            <div key={index} className="text-sm font-bold sp:text-xs">
              {tag.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
