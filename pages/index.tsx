import type { InferGetStaticPropsType, NextPage } from 'next';
import type { NotionPageObjectResponse } from '~/types/notion';

import { IndexTemplate } from '~/components/@templates/IndexTemplate';
import { getDatabaseContents } from '~/server/notion/databases';

export const getStaticProps = async () => {
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
