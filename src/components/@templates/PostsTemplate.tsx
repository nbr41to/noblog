import type { FC } from 'react';
import type { NotionPageObjectResponse } from '~/types/notion';

import { Pagination, SegmentedControl } from '@mantine/core';
import { usePagination } from '@mantine/hooks';
import Link from 'next/link';
import { useMemo } from 'react';
import { useState } from 'react';

import { GridIcon, ListIcon } from '~/commons/icons';
import { PageTitle } from '~/commons/PageTitle';
import { PostGrid } from '~/features/notionBlog/PostGrid';
import { PostList } from '~/features/notionBlog/PostList';

type ViewType = 'grid' | 'list';
type Props = {
  postsArray: NotionPageObjectResponse[][];
};

export const PostsTemplate: FC<Props> = ({ postsArray }) => {
  const total = postsArray.length;
  const [viewType, setViewType] = useState<ViewType>('grid');
  const pagination = usePagination({ total, initialPage: 1 });

  const posts = useMemo(
    () => postsArray[pagination.active - 1],
    [postsArray, pagination.active]
  );

  return (
    <div className="w-main">
      <PageTitle title="Notion Blogs" />

      <div className="px-4">
        <div className="py-4 text-right sp:py-0">
          <SegmentedControl
            className="bg-orange-50"
            color={viewType === 'grid' ? 'blue' : 'orange'}
            value={viewType}
            onChange={(value) => setViewType(value as ViewType)}
            data={[
              {
                value: 'grid',
                label: (
                  <div className="flex items-center gap-2">
                    <GridIcon size={16} />
                  </div>
                ),
              },
              {
                value: 'list',
                label: (
                  <div className="flex items-center gap-2">
                    <ListIcon size={16} />
                  </div>
                ),
              },
            ]}
          />
        </div>

        <div className="mx-auto w-fit py-4">
          <Pagination
            page={pagination.active}
            total={total}
            onChange={pagination.setPage}
          />
        </div>
        <div className="">
          {viewType === 'list' && <PostList posts={posts} />}
          {viewType === 'grid' && <PostGrid posts={posts} />}
        </div>
        <div className="mx-auto w-fit py-4">
          <Pagination
            page={pagination.active}
            total={total}
            onChange={pagination.setPage}
          />
        </div>
        <div className="text-center underline">
          <Link href="/posts/zenn-list">Zennの記事一覧はこちら</Link>
        </div>
      </div>
    </div>
  );
};
