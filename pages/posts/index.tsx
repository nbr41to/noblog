import type { InferGetStaticPropsType, NextPage } from 'next';
import type { NotionPageObjectResponse } from '~/types/notion';

import { getDatabaseContentsAll } from '~/server/notion/databases';
import { PostsTemplate } from '~/templates/PostsTemplate';

export const getStaticProps = async () => {
  const response = await getDatabaseContentsAll({
    database_id: process.env.NOTION_BLOG_DATABASE_ID || '',
    page_size: 12,
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
      postsArray: response as NotionPageObjectResponse[][],
    },
    revalidate: 60 * 60, // 1時間
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const PostIndex: NextPage<Props> = ({ postsArray }) => {
  return (
    <div>
      <PostsTemplate postsArray={postsArray} />
    </div>
  );
};

export default PostIndex;
