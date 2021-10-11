import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getPageContent } from 'src/apis/notion';
import { getMainBlogList } from 'src/apis/notion';
import styled from 'styled-components';

import { BlogDetail } from '@/components/Blog/BlogDetail';
import { NotionPageContent } from '@/type/notion';

type BlogDetailPageProps = {
  content: NotionPageContent;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { pageId } = params;
  try {
    const content = await getPageContent(
      typeof pageId === 'string' ? pageId : pageId[0],
    );
    /* contentがなくてもErrorでも404へ */
    if (!content) {
      return {
        notFound: true,
      };
    }
    return {
      props: { content },
      revalidate: 3600, // 60s * 60min
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};

type Params = {
  pageId: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const pageList = await getMainBlogList();
  const paths = pageList.map(({ id }) => ({ params: { pageId: id } }));
  return {
    paths,
    fallback: 'blocking', // HTMLを生成しない
  };
};

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ content }) => {
  return (
    <BlogDetailPageStyled>
      <BlogDetail content={content} />
    </BlogDetailPageStyled>
  );
};

const BlogDetailPageStyled = styled.div``;

export default BlogDetailPage;
