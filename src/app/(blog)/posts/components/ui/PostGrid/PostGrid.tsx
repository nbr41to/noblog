'use client';

import type { FC } from 'react';
import type { NotionPageObjectResponse } from '~/types/notion';

import { PostGridItem } from '../PostGridItem';

type Props = {
  posts: NotionPageObjectResponse[];
};

export const PostGrid: FC<Props> = ({ posts }) => {
  return (
    <div className="flex w-fit flex-wrap gap-3">
      {posts.map((post) => (
        <PostGridItem key={post.id} post={post} />
      ))}
    </div>
  );
};
