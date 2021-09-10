import { GetStaticPaths, GetStaticProps } from 'next';
import { useState, VFC, useEffect } from 'react';
import styled from 'styled-components';
import { getPageList } from '../../../src/notion/functions';
import { useRouter } from 'next/router';
import { getDatabaseInfo } from '../../../src/notion/functions';
import { BlogList } from '../../../src/components/Blog/BlogList';

type CategoryPageProps = {
  items: any;
};

export const getStaticProps: GetStaticProps = async () => {
  const pageList = await getPageList();
  return {
    props: {
      items: pageList.results,
    },
  };
};

type Params = {
  category: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const databaseProperties = await getDatabaseInfo();
  const paths = databaseProperties.Category.select.options.map(({ name }) => ({
    params: {
      category: name,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

const CategoryPage: VFC<CategoryPageProps> = ({ items }) => {
  /* pathによって表示を切り替え */
  const [category, setCategory] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!process.browser) return;
    const { asPath } = router;
    setCategory(asPath.split('/')[2]);
  }, [router]);
  return (
    <CategoryPageStyled>
      <h1>{category} blog list</h1>
      <div>
        <BlogList
          items={items.filter(
            (item) => item.properties.Category.select.name === category,
          )}
        />
      </div>
    </CategoryPageStyled>
  );
};

const CategoryPageStyled = styled.div``;

export default CategoryPage;
