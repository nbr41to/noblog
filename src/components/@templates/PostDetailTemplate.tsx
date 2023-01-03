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
    <div className="px-6 sp:px-0">
      <h1 className="py-8 text-center text-3xl sp:p-4 sp:text-xl">
        {post.title}
      </h1>

      <div className="flex justify-center gap-6">
        <div className="w-main flex flex-col gap-6 sp:gap-4">
          <div className="hidden sp:block">
            <PostMeta meta={post} commentCount={comments.length} />
          </div>
          <PostContent title={post.title} blocks={post.children} />
          {comments.length > 0 && <Comments comments={comments} />}
          <div className="hidden sp:block">
            <Bio />
          </div>
          <CommentForm onSubmit={onSubmit} />
        </div>

        <div className="w-aside">
          <Bio />
          <div className="sticky top-16 mt-4 space-y-4">
            <TableOfContents blocks={post.children} />
            <PostMeta meta={post} commentCount={comments.length} />
          </div>
        </div>
      </div>
    </div>
  );
};
