import type { FC } from "react";
import type { NotionPost } from "~/types/notion";

import { Bio } from "~/commons/Bio";
import { Comments } from "~/features/notionBlog/Comments";
import { PostContent } from "~/features/notionBlog/PostContent";
import { PostHeader } from "~/features/notionBlog/PostHeader";
import { TableOfContents } from "~/features/notionBlog/TableOfContents";
import { useComments } from "~/hooks/apiHooks/useComments";

import { CommentForm } from "../features/notionBlog/CommentForm";

type Props = {
  post: NotionPost;
};

export const PostDetailTemplate: FC<Props> = ({ post }) => {
  const { data: comments } = useComments(post.id);

  return (
    <div className="px-8 sp:px-0">
      <div className="sp:px-2">
        <PostHeader post={post} />
      </div>
      <div className="flex justify-between gap-6">
        <div className="w-main">
          <PostContent blocks={post.children} />
          <div className="p-4">
            <Comments comments={comments} />
            {/*  eslint-disable-next-line no-console */}
            <CommentForm onSubmit={() => console.log("onSubmit")} />
          </div>
        </div>

        <div className="hidden min-w-[254px] md:block">
          <div className="sticky top-8 space-y-6">
            <Bio />
            <TableOfContents blocks={post.children} />
          </div>
        </div>
      </div>
    </div>
  );
};
