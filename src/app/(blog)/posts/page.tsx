import type { NotionPageObjectResponse } from '@/types/notion';
import type { Metadata } from 'next';

import { PageTitle } from '@/app/components/PageTitle';
import { getDatabase, getDatabaseContentsAll } from '@/server/notion/databases';
import { blogDatabaseId } from '@/server/notion/ids';

import { PostList } from './components/ui/PostList';

export const dynamic = 'force-static';
const getPosts = async () => {
  const postsArray = await getDatabaseContentsAll({
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
  });

  return postsArray as NotionPageObjectResponse[][];
};

const getProperties = async () => {
  const { properties } = await getDatabase(blogDatabaseId);

  return properties;
};

export const metadata: Metadata = {
  title: 'noblog',
  description: 'Notionで作った本格Blog',
};

export default async function Page() {
  const postsArray = await getPosts();
  const properties = await getProperties();

  return (
    <div className="space-y-6 px-16">
      <PageTitle title="Notion Blog" />
      <PostList posts={postsArray.flat()} properties={properties} />
    </div>
  );
}
