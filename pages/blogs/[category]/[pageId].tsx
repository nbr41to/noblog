import { GetStaticPaths, GetStaticProps } from 'next';
import { VFC } from 'react';
import styled from 'styled-components';
import { NotionBlock } from 'src/notion/NotionBlock';
import { getPageContent } from 'src/notion/functions';
import { getPageList } from 'src/notion/functions';
import { dateFormated } from 'src/utils/dateFormated';

type BlogDetailPageProps = {
  content: any;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { pageId } = params;
  const content = await getPageContent(pageId);
  return {
    props: { content },
  };
};

type Params = {
  category: string;
  pageId: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const { results } = await getPageList();
  const paths = results.map(({ id, properties }) => ({
    params: {
      category: properties.Category.select.name,
      pageId: id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

const BlogDetailPage: VFC<BlogDetailPageProps> = ({ content }) => {
  const { results: blocks } = content;
  const { properties } = content;

  const subCategory = properties.SubCategory.multi_select;
  const tags = properties.Tags.multi_select;

  console.log(content);
  return (
    <BlogDetailPageStyled>
      <h1>{properties.Page.title[0].plain_text}</h1>
      <div className="blog_info_header">
        <p>
          カテゴリー：
          {properties.Category.select.name}
        </p>
        <p>
          作成日：
          {dateFormated({ date: properties.Created.created_time })}
        </p>
        <p>
          最終編集日：
          {dateFormated({ date: properties.Edited.last_edited_time })}
        </p>
      </div>
      <div>
        {blocks.map((block) => (
          <NotionBlock block={block} key={block.id} />
        ))}
      </div>
      <div className="blog_info_footer">
        <div>
          サブカテゴリ：
          {subCategory.length
            ? subCategory.map((i) => <span key={i.id}>{i.name}</span>)
            : 'なし'}
        </div>
        <div className="item_footer">
          タグ：
          {tags.length ? (
            tags.map((i) => <span key={i.id}>{i.name}</span>)
          ) : (
            <span>なし</span>
          )}
        </div>
      </div>
    </BlogDetailPageStyled>
  );
};

const BlogDetailPageStyled = styled.div`
  max-width: 800px;
  background-color: #fffc;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 24px 32px;
  margin: 20px auto;
  > h1 {
    text-align: center;
    margin: 4px 0 16px;
  }
  > .blog_info_header {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    padding-bottom: 8px;
    border-bottom: 2px dotted #444;
  }
  > .blog_info_footer {
    margin-top: 80px;
    padding-top: 8px;
    border-top: 2px dotted #444;
  }
`;

export default BlogDetailPage;
