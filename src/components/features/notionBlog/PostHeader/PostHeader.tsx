import type { FC } from "react";
import type { NotionPostMeta } from "~/types/notion";

type Props = {
  post: NotionPostMeta;
};

export const PostHeader: FC<Props> = ({ post }) => {
  return (
    <div className="">
      <h2 className="rounded-full bg-orange-50 py-4 px-8 font-bold sp:py-2 sp:text-xl">
        {post.title}
      </h2>
      <div className="py-2 text-right text-sm font-medium sp:text-xs">
        <div>公開: {post.date}</div>
        <div>更新: {post.updatedAt}</div>
      </div>
    </div>
  );
};
