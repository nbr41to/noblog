import type { InferGetStaticPropsType, NextPage } from 'next';
import type {
  NotionDatabaseProperty,
  NotionPageObjectResponse,
} from '~/types/notion';

import { ArticleJsonLd, NextSeo } from 'next-seo';

import dummy_notion_database_properties from '~/mocks/notion_database_properties.json';
import dummy_notion_pages_array from '~/mocks/notion_pages_array.json';
import { getDatabase, getDatabaseContentsAll } from '~/server/notion/databases';
import { blogDatabaseId } from '~/server/notion/ids';
import { PostsTemplate } from '~/templates/PostsTemplate';

export const getStaticProps = async () => {
  if (process.env.ENVIRONMENT === 'local') {
    return {
      props: {
        postsArray: dummy_notion_pages_array as NotionPageObjectResponse[][],
        properties: dummy_notion_database_properties as NotionDatabaseProperty,
      },
    };
  }

  const { properties } = await getDatabase(blogDatabaseId);
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

  return {
    props: {
      postsArray,
      properties,
    },
    revalidate: 60 * 60 * 24, // 1日
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const PostIndex: NextPage<Props> = ({ postsArray, properties }) => {
  return (
    <>
      <PostsTemplate postsArray={postsArray} properties={properties} />
      {/* meta seo */}
      <NextSeo
        title="Blog | noblog"
        openGraph={{
          url: 'https://www.nbr41.com/posts/',
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        title="Blog | noblog"
        url="https://www.nbr41.com/posts/"
        images={['https://www.nbr41.com/noblog.png']}
        datePublished="2015-02-05T08:00:00+08:00"
        dateModified={postsArray[0][0].last_edited_time}
        authorName="Nobuyuki Kobayashi"
        description="Notionに追加した記事一覧"
      />
    </>
  );
};

export default PostIndex;
