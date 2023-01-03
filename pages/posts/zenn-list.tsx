import type { InferGetStaticPropsType, NextPage } from 'next';
import type { ZennArticle } from '~/types/zennArticle';

import { ZennArticlesTemplate } from '~/components/@templates/ZennArticlesTemplate';
import dummy_zenn_articles from '~/mocks/zenn_articles.json';
import { getZennArticles } from '~/server/zenn/getZennArticles';

export const getStaticProps = async () => {
  if (process.env.ENVIRONMENT === 'local') {
    return {
      props: {
        articles: dummy_zenn_articles as ZennArticle[],
      },
    };
  }

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
    <>
      <ZennArticlesTemplate articles={articles} />
    </>
  );
};

export default ZennList;
