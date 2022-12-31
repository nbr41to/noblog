import type { FC } from 'react';
import type {
  NotionCommentObjectResponse,
  NotionPost,
  NotionRichTextItemRequest,
} from '~/types/notion';

import { Bio } from '~/commons/Bio';
import { CommentForm } from '~/features/notionBlog/CommentForm';
import { Comments } from '~/features/notionBlog/Comments';
import { PostContent } from '~/features/notionBlog/PostContent';
import { PostMeta } from '~/features/notionBlog/PostMeta/PostMeta';
import { TableOfContents } from '~/features/notionBlog/TableOfContents';

type Props = {
  post: NotionPost;
  comments: NotionCommentObjectResponse[];
  onSubmit: (rich_text: NotionRichTextItemRequest[]) => Promise<void>;
};

export const PostDetailTemplate: FC<Props> = ({ post, comments, onSubmit }) => {
  return (
    <div className="px-8 sp:px-0">
      <h1 className="my-8 text-3xl sp:my-0 sp:px-4 sp:pb-4 sp:text-xl">
        {post.title}
      </h1>

      <div className="flex justify-between gap-6">
        <div className="w-main space-y-6">
          <PostContent title={post.title} blocks={post.children} />
          <Comments comments={comments} />
          <CommentForm onSubmit={onSubmit} />
        </div>

        <div className="hidden min-w-[254px] md:block">
          <Bio />
          <div className="sticky top-4 mt-4 space-y-4">
            <TableOfContents blocks={post.children} />
            <PostMeta meta={post} commentCount={comments.length} />
          </div>
        </div>
      </div>
    </div>
  );
};
