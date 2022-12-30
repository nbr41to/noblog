import type { FC } from "react";
import type { NotionPost } from "~/types/notion";

import { PostContent } from "~/features/post/PostContent";
import { PostHeader } from "~/features/post/PostHeader";

import { TableOfContents } from "../features/post/TableOfContent";

type Props = {
  post: NotionPost;
};

export const PostDetailTemplate: FC<Props> = ({ post }) => {
  return (
    <div className="px-8">
      <div className="">
        <PostHeader post={post} />
      </div>
      <div className="flex justify-between gap-6">
        <div className="w-main">
          <PostContent blocks={post.children} />
        </div>
        <div className="hidden md:block">
          <TableOfContents blocks={post.children} />
        </div>
      </div>
    </div>
  );
};
