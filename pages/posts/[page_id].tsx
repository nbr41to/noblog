import type { GetStaticPaths, InferGetStaticPropsType, NextPage } from 'next';
import type {
  NotionBlockObjectResponse,
  NotionPageObjectResponse,
  NotionRichTextItemRequest,
} from '~/types/notion';

import { ArticleJsonLd, NextSeo } from 'next-seo';

import { useComments } from '~/hooks/apiHooks/useComments';
import { getChildrenInBlock } from '~/server/notion/blocks';
import { getDatabaseContents } from '~/server/notion/databases';
import { getPage } from '~/server/notion/pages';
import { PostDetailTemplate } from '~/templates/PostDetailTemplate';
import { toMetaDescription, toPostMeta } from '~/utils/meta';

type Params = {
  page_id: string;
};
export const getStaticProps = async (context: { params: Params }) => {
  const page_id = context.params?.page_id as string;
  const page = await getPage(page_id);
  const response = await getChildrenInBlock(page_id);

  const post = {
    ...toPostMeta(page as NotionPageObjectResponse),
    description: toMetaDescription(
      response.results as NotionBlockObjectResponse[]
    ),
    children: response.results as NotionBlockObjectResponse[],
  };

  return {
    props: {
      post,
    },
    revalidate: 60 * 60, // 1時間
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const response = await getDatabaseContents({
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
  const posts = response.results as NotionPageObjectResponse[];
  const paths = posts.map(({ id }) => ({ params: { page_id: id } }));

  return {
    paths,
    fallback: 'blocking', // HTMLを生成しない
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Post: NextPage<Props> = ({ post }) => {
  const { data: comments, trigger } = useComments(post.id);

  const handleCommentSubmit = async (
    rich_text: NotionRichTextItemRequest[]
  ) => {
    await trigger({
      parent: {
        page_id: post.id,
      },
      rich_text,
    });
  };

  return (
    <>
      <div>
        <PostDetailTemplate
          post={post}
          comments={comments}
          onSubmit={handleCommentSubmit}
        />
      </div>

      {/* meta seo */}
      <NextSeo
        title={post.title + ' | noblog'}
        description={post.description}
        openGraph={{
          url: 'https://www.nbr41.com/posts/' + post.id,
          title: post.title + ' | noblog',
          description: post.description,
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url={'https://www.nbr41.com/posts/' + post.id}
        title={post.title + ' | noblog'}
        images={['https://www.nbr41.com/site_image.jpg']}
        datePublished="2015-02-05T08:00:00+08:00"
        dateModified={post.updatedAt}
        authorName={[
          {
            name: 'noblog',
            url: 'https://www.nbr41.com',
          },
          {
            name: 'Nobuyuki Kobayashi',
            url: 'https://www.nbr41.com',
          },
        ]}
        publisherName="Nobuyuki Kobayashi"
        publisherLogo="nob_lego.jpg"
        description={post.description}
        isAccessibleForFree={true}
      />
    </>
  );
};

export default Post;
