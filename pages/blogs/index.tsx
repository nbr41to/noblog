import { GetStaticProps } from 'next';
import { VFC } from 'react';
import styled from 'styled-components';

import { getPageList } from '../../src/notion';
import { useRouter } from 'next/router';

type BlogPageProps = {
  items: any;
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await getPageList();
  return {
    props: {
      items: response.results,
    },
  };
};

const BlogsPage: VFC<BlogPageProps> = ({ items }) => {
  // console.log(items);
  const router = useRouter();

  return (
    <BlogsPageStyled>
      <h1>blog list</h1>
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
