import type { InferGetStaticPropsType, NextPage } from 'next';
import type { NotionPageObjectResponse } from '~/types/notion';

import { NextSeo } from 'next-seo';

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
    <>
      <PostsTemplate postsArray={postsArray} />
      {/* meta seo */}
      <NextSeo
        title="Blog | noblog"
        openGraph={{
          url: 'https://www.nbr41.com/posts/',
        }}
      />
      {/* <ArticleJsonLd
        type="BlogPosting"
        title="Blog | noblog"
        url="https://www.nbr41.com/posts/"
        images={['https://www.nbr41.com/site_image.jpg']}
        datePublished="2015-02-05T08:00:00+08:00"
        dateModified={postsArray[0][0].last_edited_time}
        authorName="Nobuyuki Kobayashi"
        description="Notionに追加した記事一覧"
      /> */}
    </>
  );
};

export default PostIndex;
