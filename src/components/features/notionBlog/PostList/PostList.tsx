import type { FC } from 'react';
import type { NotionPageObjectResponse } from '~/types/notion';

import { PostListItem } from '~/features/notionBlog/PostListItem';

type Props = {
  posts: NotionPageObjectResponse[];
};

export const PostList: FC<Props> = ({ posts }) => {
  return (
    <div className="space-y-3">
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </div>
  );
};
