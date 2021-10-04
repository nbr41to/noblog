import { VFC } from 'react';
import styled from 'styled-components';

type CategoryListProps = {
  className?: string;
};

export const CategoryList: VFC<CategoryListProps> = ({ className }) => {
  return (
    <StyledCategoryList className={`${className}`}>
      <h2>カテゴリー一覧</h2>
    </StyledCategoryList>
  );
};

const StyledCategoryList = styled.div``;
