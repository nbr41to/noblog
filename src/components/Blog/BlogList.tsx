import { VFC } from 'react';
import styled from 'styled-components';

import { BlogListItem } from './BlogListItem';

type BlogListProps = {
  items: any[];
};

export const BlogList: VFC<BlogListProps> = ({ items }) => {
  return (
    <StyledBlogList>
      {items.map((item) => (
        <StyledBlogListItem key={item.id} item={item} />
      ))}
    </StyledBlogList>
  );
};

const StyledBlogListItem = styled(BlogListItem)`
  margin: 16px 0;
`;
const StyledBlogList = styled.div``;
