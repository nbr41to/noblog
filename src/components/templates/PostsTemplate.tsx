import type { NotionPageObjectResponse } from '@/types/notion';
import type { FC } from 'react';

import { SegmentedControl } from '@mantine/core';
import { useState } from 'react';
import { BsListUl, BsGrid } from 'react-icons/bs';

import { PostGrid } from '@/components/features/post/PostGrid';
import { PostList } from '@/components/features/post/PostList';

type Props = {
  posts: NotionPageObjectResponse[];
};

export const PostsTemplate: FC<Props> = ({ posts }) => {
  const [viewType, setViewType] = useState<'list' | 'grid'>('list');

  return (
    <div>
      <h2 className='text-center font-baloo'>- Notion Blogs -</h2>

      <div className='px-4'>
        <div className='py-4 text-right'>
          <SegmentedControl
            className='bg-orange-50'
            color={viewType === 'list' ? 'orange' : 'blue'}
            value={viewType}
            onChange={(value) => setViewType(value as 'list' | 'grid')}
            data={[
              {
                value: 'list',
                label: (
                  <div className='flex items-center gap-2'>
                    <BsListUl size={16} />
                  </div>
                ),
              },
              {
                value: 'grid',
                label: (
                  <div className='flex items-center gap-2'>
                    <BsGrid size={16} />
                  </div>
                ),
              },
            ]}
          />
        </div>

        <div className='mx-auto w-fit'>
          {viewType === 'grid' && <PostGrid posts={posts} />}
          {viewType === 'list' && <PostList posts={posts} />}
        </div>
      </div>
    </div>
  );
};
