import { GetStaticProps } from 'next';
import { VFC } from 'react';
import styled from 'styled-components';

import { getDatabaseInfo, getPageList } from '../../src/notion';
import { useRouter } from 'next/router';
import { BlogList } from '../../src/components/BlogList';

type BlogPageProps = {
  items: any;
  databaseProperties: any;
};

export const getStaticProps: GetStaticProps = async () => {
  const pageList = await getPageList();
  const databaseProperties = await getDatabaseInfo();
  return {
    props: {
      items: pageList.results,
      databaseProperties,
    },
  };
};

const BlogsPage: VFC<BlogPageProps> = ({ items, databaseProperties }) => {
  // console.log(items, databaseProperties);

  const categoryList = databaseProperties.Category.select.options.map(
    (category) => category,
  );
  const router = useRouter();

  const selectCategory = (category: string) => {
    router.push(`/blogs/${category}`);
  };

  return (
    <BlogsPageStyled>
      <h2>Category list</h2>
      <div>
        {categoryList.map((category) => (
          <div key={category.id} onClick={() => selectCategory(category.name)}>
            {category.name}
          </div>
        ))}
      </div>
      <h2> All blog list</h2>
      <BlogList items={items} />
    </BlogsPageStyled>
  );
};

const BlogsPageStyled = styled.div``;

export default BlogsPage;
