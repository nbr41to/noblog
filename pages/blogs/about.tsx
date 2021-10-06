import { GetStaticProps, NextPage } from 'next';
import styled from 'styled-components';

import { getDatabaseInfo } from '@/apis/notion';
import NotionBlogAbout from '@/markdown/notion-blog-about.mdx';

type AboutProps = {
  className?: string;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    /* データベースに関するpropertiesを取得 */
    const databaseInfo = await getDatabaseInfo();
    return {
      props: {
        databaseInfo, // _app.tsxで使用
      },
    };
  } catch (error) {
    console.error(error);
  }
};

const About: NextPage<AboutProps> = ({ className }) => {
  return (
    <StyledAbout className={`${className}`}>
      <h2>Notion APIを使ったBlogに関して</h2>
      <NotionBlogAbout />
    </StyledAbout>
  );
};

const StyledAbout = styled.div``;

export default About;
