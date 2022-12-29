import type { InferGetStaticPropsType, NextPage } from 'next';

import { ZennListTemplate } from '@/components/@templates/ZennListTemplate';
import { getZennArticles } from '@/server/zenn/getZennArticles';

export const getStaticProps = async () => {
  const articles = await getZennArticles();

  return {
    props: {
      articles,
    },
    revalidate: 60 * 60 * 24 * 7, // 1週間
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const ZennList: NextPage<Props> = ({ articles }) => {
  return (
    <div>
      <ZennListTemplate articles={articles} />
    </div>
  );
};

export default ZennList;
