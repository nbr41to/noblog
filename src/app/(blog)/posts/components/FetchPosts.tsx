import type { NotionPageObjectResponse } from '~/types/notion';

import { getDatabaseContentsAll } from '@/server/notion/databases';
import { blogDatabaseId } from '@/server/notion/ids';

import { PostGrid } from './ui/PostGrid';

const getPosts = async () => {
  const postsArray = (await getDatabaseContentsAll({
    database_id: blogDatabaseId,
    page_size: 12,
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
    filter: {
      and: [
        {
          property: 'Status',
          select: {
            equals: 'PUBLISH',
          },
        },
        {
          property: 'Date',
          date: {
            is_not_empty: true,
          },
        },
      ],
    },
  })) as NotionPageObjectResponse[][];

  return postsArray as NotionPageObjectResponse[][];
};

export const FetchLatestPosts = async () => {
  const postsArray = await getPosts();

  return (
    <div className="space-y-3">
      <div className="w-main min-h-[840px]">
        <PostGrid posts={postsArray[0]} />
      </div>
    </div>
  );
};
