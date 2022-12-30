import type { FC } from "react";
import type { NotionPageObjectResponse } from "~/types/notion";

import { useRouter } from "next/router";
import { useMemo } from "react";

import { toPostMeta } from "~/client/notion/toPostMeta";

type Props = {
  post: NotionPageObjectResponse;
};

export const PostListItem: FC<Props> = ({ post }) => {
  const router = useRouter();
  const meta = useMemo(() => toPostMeta(post), [post]);

  return (
    <div
      className="flex cursor-pointer items-center gap-5 rounded bg-orange-50 px-5 py-3 shadow"
      onClick={() => router.push(`/posts/${post.id}`)}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-4xl shadow">
        <div className="pb-1 text-3xl">{meta.icon}</div>
      </div>
      <div className="space-y-3">
        <div className="flex items-end gap-3">
          <h3 className="font-bold">{meta.title}</h3>
          <p className="text-sm">{meta.date}</p>
        </div>

        <div className="flex gap-4">
          <div className="rounded bg-orange-400 px-3 py-1 text-sm text-white">
            {meta.category}
          </div>
          <div className="space-x-2">
            {meta.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-slate-200 px-3 py-1 text-sm text-gray-800"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
