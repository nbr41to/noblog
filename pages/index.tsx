import type { InferGetStaticPropsType, NextPage } from 'next';
import type { NotionPageObjectResponse } from '~/types/notion';

import { Badge } from '@mantine/core';

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
      <div className="space-y-2">
        <div className="text-center text-2xl font-bold">
          Happy New Year!!
          <br />
          NotionでBlog作ったよ〜〜
        </div>
        <div className="text-center">
          <Badge className="lowercase">nextjs</Badge>
          <Badge className="lowercase">typescript</Badge>
          <Badge className="lowercase">tailwindcss</Badge>
          <Badge className="lowercase">vercel</Badge>
        </div>
        <div className="text-center font-bold">SourceはGitHubにあります</div>
        <div className="text-center font-bold">このページが一番手抜き😇</div>
        <div className="text-center font-bold">
          今後はライブラリやツールを試すようのサイトにもする予定です
        </div>
      </div>

      <div className="w-main mt-4 px-4">
        <h2 className="mb-4 text-lg">最新の記事5件</h2>
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default Home;
