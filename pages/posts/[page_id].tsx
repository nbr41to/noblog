import type { GetStaticPaths, InferGetStaticPropsType, NextPage } from "next";
import type {
  NotionBlockObjectResponse,
  NotionPageObjectResponse,
} from "~/types/notion";

import { getChildrenInBlock } from "~/server/notion/blocks";
import { getDatabaseContents } from "~/server/notion/databases";
import { getPage } from "~/server/notion/pages";
import { PostDetailTemplate } from "~/templates/PostDetailTemplate";
import { toPostMeta } from "~/utils/notion/toPostMeta";

type Params = {
  page_id: string;
};
export const getStaticProps = async (context: { params: Params }) => {
  const page_id = context.params?.page_id as string;
  const page = await getPage(page_id);
  const response = await getChildrenInBlock(page_id);

  const post = {
    ...toPostMeta(page as NotionPageObjectResponse),
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
    database_id: process.env.NOTION_BLOG_DATABASE_ID || "",
    page_size: 12,
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
    filter: {
      property: "Status",
      select: {
        equals: "PUBLISH",
      },
    },
  });
  const posts = response.results as NotionPageObjectResponse[];
  const paths = posts.map(({ id }) => ({ params: { page_id: id } }));

  return {
    paths,
    fallback: "blocking", // HTMLを生成しない
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Post: NextPage<Props> = ({ post }) => {
  return (
    <div>
      <PostDetailTemplate post={post} />
    </div>
  );
};

export default Post;
