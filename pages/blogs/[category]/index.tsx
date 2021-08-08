import { VFC } from 'react';
import styled from 'styled-components';

const CategoryPage: VFC = () => {
  /* pathによって表示を切り替え */
  return (
    <CategoryPageStyled>
      <h1>Category</h1>
    </CategoryPageStyled>
  );
};

const CategoryPageStyled = styled.div``;

export default CategoryPage;
