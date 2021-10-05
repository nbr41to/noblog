import { VFC } from 'react';
import styled from 'styled-components';

import { NotionPageItem } from '@/type/notion';

import { BlogListItem } from './_BlogListItem';

type BlogListProps = {
  items: NotionPageItem[];
};

export const BlogList: VFC<BlogListProps> = ({ items }) => {
  return (
    <StyledBlogList>
      {items.map((item) => (
        <BlogListItem className="m-8" key={item.id} item={item} />
      ))}
    </StyledBlogList>
  );
};

const StyledBlogList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0;
`;
