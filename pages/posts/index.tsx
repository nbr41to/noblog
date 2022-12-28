import { PostsTemplate } from '@/components/templates/PostsTemplate';
import { getDatabaseContents } from '@/server/notion/databases';
import { NotionPageObjectResponse } from '@/types/notion';
import { InferGetStaticPropsType, NextPage } from 'next';

export const getStaticProps = async () => {
  const response = await getDatabaseContents(
    process.env.NOTION_BLOG_DATABASE_ID!,
    12,
    {
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
    },
  );

  return {
    props: {
      posts: response.results as NotionPageObjectResponse[],
    },
    revalidate: 60 * 60, // 1時間
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const PostIndex: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <PostsTemplate posts={posts} />
    </div>
  );
};

export default PostIndex;
