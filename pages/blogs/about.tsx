import { NextPage } from 'next';
import styled from 'styled-components';

import { MDXWrapper } from '@/components/MDXWrapper';
import NotionBlogAbout from '@/markdown/notion-blog-about.mdx';

type AboutProps = {
  className?: string;
};

const About: NextPage<AboutProps> = ({ className }) => {
  return (
    <StyledAbout className={`${className}`}>
      <MDXWrapper>
        <NotionBlogAbout />
      </MDXWrapper>
    </StyledAbout>
  );
};

const StyledAbout = styled.div``;

export default About;
