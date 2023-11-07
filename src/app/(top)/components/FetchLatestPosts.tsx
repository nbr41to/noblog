import type { NotionPageObjectResponse } from '~/types/notion';

import { getDatabaseContents } from '~/server/notion/databases';

import { PostListItem } from './ui/PostListItem';

const getLatestPosts = async () => {
  const { results } = await getDatabaseContents({
    database_id: process.env.NOTION_BLOG_DATABASE_ID!,
    page_size: 5,
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
        {
          property: 'Zenn',
          checkbox: {
            equals: false,
          },
        },
      ],
    },
  });

  return results as NotionPageObjectResponse[];
};

export const FetchLatestPosts = async () => {
  const posts = await getLatestPosts();

  return (
    <div className="space-y-3">
      {posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </div>
  );
};
