import { NotionPageObjectResponse } from '@/types/notion';
import { FC } from 'react';
import { PostGridItem } from '../PostGridItem';

type Props = {
  posts: NotionPageObjectResponse[];
};

export const PostGrid: FC<Props> = ({ posts }) => {
  return (
    <div className='flex flex-wrap justify-center gap-3'>
      {posts.map((post) => (
        <PostGridItem key={post.id} post={post} />
      ))}
    </div>
  );
};
