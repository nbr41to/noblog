import type { InferGetStaticPropsType, NextPage } from 'next';

import { getZennArticles } from '~/server/zenn/getZennArticles';
import { ZennListTemplate } from '~/templates/ZennListTemplate';

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
