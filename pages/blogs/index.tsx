import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { VFC } from 'react';
import styled from 'styled-components';
import useSWR, { SWRConfig } from 'swr';

import { BlogList } from '@/components/Blog/BlogList';
import { CategoryList } from '@/components/Blog/CategoryList';
import { NotionPageItems, NotionSelectOptions } from '@/type/notion';

import { getDatabaseInfo, getPageList } from '../../src/apis/notion';

type BlogPageProps = {
  items: NotionPageItems;
  categories: NotionSelectOptions;
  tags: NotionSelectOptions;
  fallback: {
    [key: string]: any;
  };
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    /* データベースに関するpropertiesを取得 */
    const databaseInfo = await getDatabaseInfo();

    /* データベースからページを取得 */
    const pageList = await getPageList();

    return {
      props: {
        items: pageList,
        categories: databaseInfo.categories,
        tags: databaseInfo.tags,
        fallback: {
          '/blog/options': databaseInfo,
        },
      },
    };
  } catch (error) {
    console.error(error);
  }
};

const BlogsPage: VFC<BlogPageProps> = ({
  items,
  categories,
  tags,
  fallback,
}) => {
  const router = useRouter();

  return (
    <SWRConfig value={{ fallback }}>
      <BlogsPageStyled>
        <CategoryList />
        <h2> All blog list</h2>
        <BlogList items={items} />
      </BlogsPageStyled>
    </SWRConfig>
  );
};

const BlogsPageStyled = styled.div``;

export default BlogsPage;
