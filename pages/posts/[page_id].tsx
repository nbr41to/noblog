import type { GetStaticPaths, InferGetStaticPropsType, NextPage } from 'next';
import type {
  NotionBlockObjectResponse,
  NotionPageObjectResponse,
  NotionPost,
} from '~/types/notion';

import { ArticleJsonLd, NextSeo } from 'next-seo';

import { useComments } from '~/hooks/apiHooks/useComments';
import dummy_notion_pages_array from '~/mocks/notion_pages_array.json';
import dummy_notion_post from '~/mocks/notion_post.json';
import { getChildrenAllInBlock } from '~/server/notion/blocks';
import { getDatabaseContentsAll } from '~/server/notion/databases';
import { blogDatabaseId } from '~/server/notion/ids';
import { getPage } from '~/server/notion/pages';
import { saveToAlgolia } from '~/server/utils/algolia';
import { setOgp } from '~/server/utils/ogp';
import { PostDetailTemplate } from '~/templates/PostDetailTemplate';
import { toMetaDescription, toPostMeta } from '~/utils/meta';

type Params = {
  page_id: string;
};
export const getStaticProps = async (context: { params: Params }) => {
  if (process.env.ENVIRONMENT === 'local') {
    return {
      props: {
        post: dummy_notion_post as NotionPost,
      },
    };
  }

  const page_id = context.params?.page_id as string;
  const page = (await getPage(page_id)) as NotionPageObjectResponse;
  const children = (await getChildrenAllInBlock(
    page_id,
  )) as NotionBlockObjectResponse[];

  const childrenWithOgp = await setOgp(children);

  const post = {
    ...toPostMeta(page),
    description: toMetaDescription(children),
    children: childrenWithOgp,
  };

  await saveToAlgolia(post);

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 3, // 3時間
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  if (process.env.ENVIRONMENT === 'local') {
    const posts = dummy_notion_pages_array.flat() as NotionPageObjectResponse[];
    const paths = posts.map(({ id }) => ({ params: { page_id: id } }));

    return {
      paths,
      fallback: 'blocking', // HTMLを生成しない
    };
  }

  const postsArray = await getDatabaseContentsAll({
    database_id: blogDatabaseId,
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
  const posts = postsArray.flat() as NotionPageObjectResponse[];
  const paths = posts.map(({ id }) => ({ params: { page_id: id } }));

  return {
    paths,
    fallback: 'blocking', // HTMLを生成しない
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Post: NextPage<Props> = ({ post }) => {
  const { data: comments } = useComments(post.id);

  // const handleCommentSubmit = async (
  //   rich_text: NotionRichTextItemRequest[]
  // ) => {
  //   await trigger({
  //     parent: {
  //       page_id: post.id,
  //     },
  //     rich_text,
  //   });
  // };

  return (
    <>
      <PostDetailTemplate post={post} comments={comments} />

      {/* meta seo */}
      <NextSeo
        title={`${post.title} | noblog`}
        description={post.description}
        openGraph={{
          url: `https://www.nbr41.com/posts/${post.id}`,
          title: `${post.title} | noblog`,
          description: post.description,
          images: [
            {
              url: `https://www.nbr41.com/api/notion-blog/og?title=${post.title}`,
              width: 1200,
              height: 630,
              alt: 'Site Image',
              type: 'image/png',
            },
          ],
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url={`https://www.nbr41.com/posts/${post.id}`}
        title={`${post.title} | noblog`}
        images={[
          `https://www.nbr41.com/api/notion-blog/og?title=${post.title}`,
        ]}
        datePublished="2015-02-05T08:00:00+08:00"
        dateModified={post.updatedAt}
        authorName={[
          {
            name: 'Nobuyuki Kobayashi',
            url: 'https://www.nbr41.com',
          },
        ]}
        description={post?.description || ''}
        isAccessibleForFree={true}
      />
    </>
  );
};

export default Post;
