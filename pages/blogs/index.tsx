import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { useMemo, VFC } from 'react';
import styled from 'styled-components';

import { getDatabaseInfo, getPageList } from '../../src/apis/notion';
import { BlogList } from '../../src/components/Blog/BlogList';

type BlogPageProps = {
  items: any;
  databaseProperties: any;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    /* データベースに関するpropertiesを取得 */
    const databaseProperties = await getDatabaseInfo();

    /* データベースからページを取得 */
    const items = [];
    const condition = { has_more: true, next_cursor: null };
    /* n個ずつ取ってくる */
    while (condition.has_more) {
      const pageListResponse = await getPageList(condition.next_cursor);
      condition.has_more = pageListResponse.has_more;
      condition.next_cursor = pageListResponse.next_cursor;
      items.push(...pageListResponse.results);
    }

    return {
      props: {
        items,
        databaseProperties,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

const BlogsPage: VFC<BlogPageProps> = ({ items, databaseProperties }) => {
  const router = useRouter();
  console.log(items, databaseProperties);

  const categoryList = useMemo(
    () =>
      databaseProperties.Category.select.options.map((category) => {
        const { id, color, name } = category;
        return { id, color, name };
      }),
    [],
  );

  const tagList = useMemo(
    () =>
      databaseProperties.Tags.multi_select.options.map((tag) => {
        const { id, color, name } = tag;
        return { id, color, name };
      }),
    [],
  );

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
