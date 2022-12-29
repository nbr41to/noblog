import type { NotionBlockObjectResponse } from '@/types/notion';
import type { InferGetStaticPropsType, NextPage } from 'next';

import { TableOfContents } from '@/components/features/post/TableOfContent';
import { NotionBlockPreview } from '@/components/features/sandbox/NotionBlockPreview';
import { getChildrenInBlock } from '@/server/notion/blocks';

export const getStaticProps = async () => {
  const response = await getChildrenInBlock(
    process.env.NOTION_PREVIEW_PAGE_ID || '',
  );

  return {
    props: {
      blocks: response.results as NotionBlockObjectResponse[],
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const NotionBlockPreviewPage: NextPage<Props> = ({ blocks }) => {
  return (
    <div className='flex justify-between'>
      <div className=''>
        <TableOfContents blocks={blocks} isAll />
      </div>
      <div className='w-main'>
        <NotionBlockPreview blocks={blocks} />
      </div>
    </div>
  );
};

export default NotionBlockPreviewPage;
