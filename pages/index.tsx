import type { InferGetStaticPropsType, NextPage } from 'next';
import type { NotionPageObjectResponse } from '~/types/notion';

import { PostList } from '~/components/features/notionBlog/PostList';
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
    revalidate: 60 * 60, // 1時間
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <h2>
        謎解きが好きです。このサイト内で遊べる脱出ゲーム的な謎解きを用意したので、よかったら遊んでいってください。
      </h2>

      <h2>最新の記事5件</h2>
      <div className="w-main">
        <PostList posts={posts} />
      </div>
      <h2>このBlogを作るまでのロードマップ</h2>
      <h2>Sandbox</h2>
    </div>
  );
};

export default Home;
