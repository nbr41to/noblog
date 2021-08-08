import { GetStaticPaths, GetStaticProps } from 'next';
import { VFC } from 'react';
import styled from 'styled-components';
import { CompiledBlock } from '../../../src/components/CompiledBlock';
import { getPageContent } from '../../../src/notion';
import { getPageList } from '../../../src/notion/index';

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

  // console.log(content);
  return (
    <BlogDetailPageStyled>
      <h1>{properties.Page.title[0].plain_text}</h1>
      <div>
        {blocks.map((block) => (
          <CompiledBlock block={block} key={block.id} />
        ))}
      </div>
    </BlogDetailPageStyled>
  );
};

const BlogDetailPageStyled = styled.div``;

export default BlogDetailPage;
