import type { NextPage } from 'next';
import type { NotionBlockObjectResponse } from '~/types/notion';

import { Prism } from '@mantine/prism';
import Head from 'next/head';

import { PageTitle } from '~/commons/PageTitle';
import { blockToJsx } from '~/components/notion/blockToJsx';
import { getChildrenInBlock } from '~/server/notion/blocks';
import { previewPageId } from '~/server/notion/ids';

export const getServerSideProps = async () => {
  const response = await getChildrenInBlock({
    block_id: previewPageId,
    page_size: 5,
  });

  return {
    props: {
      blocks: response.results as NotionBlockObjectResponse[],
    },
  };
};

const NextjsSsr: NextPage<{ blocks: NotionBlockObjectResponse[] }> = ({
  blocks,
}) => {
  return (
    <div className="w-main mx-auto">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <PageTitle title="Next.js SSR" />
      <p>NotionのページのBlockをgetServerSidePropsで取得するコードを書いた</p>
      <Prism language="tsx">{`export const getServerSideProps = async () => {
  const response = await getChildrenInBlock({
    block_id: previewPageId,
    page_size: 5,
  });

  return {
    props: {
      blocks: response.results as NotionBlockObjectResponse[],
    },
  };
};`}</Prism>
      <p>これがリクエストの度に最新のNotionのデータを取得するかを確認したい</p>

      <div className="w-main mx-auto">
        <div>以下 Notion Blocks</div>
        {blocks.map((block) => (
          <div key={block.id}>{blockToJsx(block)}</div>
        ))}
      </div>
    </div>
  );
};

export default NextjsSsr;
