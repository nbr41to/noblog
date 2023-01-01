import type { InferGetStaticPropsType, NextPage } from 'next';

import { useRouter } from 'next/router';

import { ZennArticlesTemplate } from '~/components/@templates/ZennArticlesTemplate';
import { Breadcrumbs } from '~/layouts/Breadcrumbs';
import { getZennArticles } from '~/server/zenn/getZennArticles';

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
  const router = useRouter();

  return (
    <>
      <Breadcrumbs currentPath={router.pathname} />
      <ZennArticlesTemplate articles={articles} />
    </>
  );
};

export default ZennList;
