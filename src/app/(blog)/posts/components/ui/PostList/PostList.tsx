'use client';

import type { ViewControl } from '@/types/form';
import type {
  NotionBlogPropertiesWithCount,
  NotionDatabaseProperty,
  NotionPageObjectResponse,
} from '@/types/notion';
import type { FC } from 'react';

import { Pagination } from '@mantine/core';
import { usePagination } from '@mantine/hooks';
import { useMemo, useState } from 'react';

import { PostsViewControl } from '@/components/features/notionBlog/PostsViewControl';
import {
  getControlledPosts,
  getPropertiesWithCount,
} from '@/utils/postsControl';

import { PostGrid } from '../PostGrid';

type Props = {
  posts: NotionPageObjectResponse[];
  properties: NotionDatabaseProperty;
};

export const PostList: FC<Props> = ({ posts, properties }) => {
  const [viewControlValue, setViewControlValue] = useState<ViewControl>({
    type: 'grid',
    categoryId: '',
    tagIds: [],
  });

  const controlledPostsArray = useMemo(() => {
    const filteredPosts = getControlledPosts(posts, viewControlValue);

    const chunkedPosts = filteredPosts.reduce((acc, post, index) => {
      const chunkIndex = Math.floor(index / 12);
      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }
      acc[chunkIndex].push(post);

      return acc;
    }, [] as NotionPageObjectResponse[][]);

    return chunkedPosts.length > 0 ? chunkedPosts : [[]];
  }, [posts, viewControlValue]);

  const totalPage = useMemo(
    () => controlledPostsArray.length,
    [controlledPostsArray],
  );

  const pagination = usePagination({
    total: totalPage,
    initialPage: 1,
  });

  const controlledCurrentPosts = useMemo(
    () => controlledPostsArray[pagination.active - 1],
    [controlledPostsArray, pagination.active],
  );

  const blogPropertiesWithCount: NotionBlogPropertiesWithCount = useMemo(
    () => getPropertiesWithCount(properties, posts),
    [posts, properties],
  );

  return (
    <div className="">
      <div className="flex justify-center gap-6">
        <div className="w-main min-h-[840px]">
          <PostGrid posts={controlledCurrentPosts} />
        </div>

        <div className="w-aside">
          <div className="sticky top-4">
            <PostsViewControl
              properties={blogPropertiesWithCount}
              value={viewControlValue}
              onChange={setViewControlValue}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto w-fit py-4">
        <Pagination
          value={pagination.active}
          total={totalPage}
          onChange={pagination.setPage}
        />
      </div>
    </div>
  );
};
