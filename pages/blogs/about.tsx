import { NextPage } from 'next';
import styled from 'styled-components';

import NotionBlogAbout from '@/markdown/notion-blog-about.mdx';

type AboutProps = {
  className?: string;
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
