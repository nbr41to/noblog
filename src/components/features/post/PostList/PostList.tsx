import { NotionPageObjectResponse } from '@/types/notion';
import { FC } from 'react';
import { PostListItem } from '../PostListItem';

type Props = {
  posts: NotionPageObjectResponse[];
};

export const PostList: FC<Props> = ({ posts }) => {
  return (
    <div className='space-y-3'>
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </div>
  );
};
