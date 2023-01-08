import type { InferGetStaticPropsType, NextPage } from 'next';
import type { NotionBlockObjectResponse } from '~/types/notion';

import { getChildrenInBlock } from '~/server/notion/blocks';
import { ProfileTemplate } from '~/templates/ProfileTemplate';

export const getStaticProps = async () => {
  // if (process.env.ENVIRONMENT === 'local') {
  //   return {
  //     props: {
  //       posts: dummy_notion_pages_latest,
  //     },
  //   };
  // }

  const { results } = await getChildrenInBlock({
    block_id: process.env.NOTION_PROFILE_PAGE_ID || '',
  });

  return {
    props: {
      blocks: results as NotionBlockObjectResponse[],
    },
    revalidate: 60 * 60 * 24, // 1日
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Profile: NextPage<Props> = ({ blocks }) => {
  return (
    <>
      <ProfileTemplate blocks={blocks} />
    </>
  );
};

export default Profile;
