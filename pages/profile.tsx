import type { InferGetStaticPropsType, NextPage } from 'next';
import type { NotionBlockObjectResponse } from '~/types/notion';

import notion_profile_blocks from '~/mocks/notion_profile_blocks.json';
import { getChildrenInBlock } from '~/server/notion/blocks';
import { ProfileTemplate } from '~/templates/ProfileTemplate';

export const getStaticProps = async () => {
  if (process.env.ENVIRONMENT === 'local') {
    return {
      props: {
        blocks: notion_profile_blocks as NotionBlockObjectResponse[],
      },
    };
  }

  const { results } = await getChildrenInBlock({
    block_id: process.env.NOTION_PROFILE_PAGE_ID || '',
  });

  return {
    props: {
      blocks: results as NotionBlockObjectResponse[],
    },
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
