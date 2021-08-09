import { GetStaticProps } from 'next';
import { VFC } from 'react';
import styled from 'styled-components';

import { getDatabaseInfo, getPageList } from '../../src/notion';
import { useRouter } from 'next/router';

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

  return (
    <BlogsPageStyled>
      <h2>Category list</h2>
      <div>
        {categoryList.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))}
      </div>
      <h2> All blog list</h2>
      <div>
        {items.map((item) => {
          const { properties } = item;
          const title = properties.Page.title[0].plain_text;
          const category = properties.Category.select;
          const subCategory = properties.SubCategory.multi_select;
          // const title = properties.Page.title[0].text.content; // 違いがわからん

          return (
            <div
              key={item.id}
              className="box"
              onClick={() => router.push(`blogs/${category.name}/${item.id}`)}
            >
              <h3>{title}</h3>
              <div>カテゴリ：{category.name}</div>
              <div>
                サブカテゴリ：
                {subCategory.length
                  ? subCategory.map((i) => <span key={i.id}>{i.name}</span>)
                  : 'なし'}
              </div>
              <div>最終編集日：{item.last_edited_time}</div>
            </div>
          );
        })}
      </div>
    </BlogsPageStyled>
  );
};

const BlogsPageStyled = styled.div``;

export default BlogsPage;
