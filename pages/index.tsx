import type { InferGetStaticPropsType, NextPage } from 'next';
import type { NotionPageObjectResponse } from '~/types/notion';

import { IndexTemplate } from '~/components/@templates/IndexTemplate';
import dummy_notion_pages_latest from '~/mocks/notion_pages_latest.json';
import { getDatabaseContents } from '~/server/notion/databases';

export const getStaticProps = async () => {
  if (process.env.ENVIRONMENT === 'local') {
    return {
      props: {
        posts: dummy_notion_pages_latest as NotionPageObjectResponse[],
      },
    };
  }

  const response = await getDatabaseContents({
    database_id: process.env.NOTION_BLOG_DATABASE_ID || '',
    page_size: 5,
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
    filter: {
      property: 'Status',
      select: {
        equals: 'PUBLISH',
      },
    },
  });

  return {
    props: {
      posts: response.results as NotionPageObjectResponse[],
    },
    revalidate: 60 * 60 * 24, // 1日
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <IndexTemplate posts={posts} />
    </>
  );
};

export default Home;
