import { VFC } from 'react';
import styled from 'styled-components';

import { NotionSelectOption } from '@/type/notion';

import { SelectOptionButton } from './_SelectOptionButton';

type CategoryListProps = {
  className?: string;
  items: NotionSelectOption[];
  selectedId: string;
  onClick: (id: string) => void;
};

export const CategoryList: VFC<CategoryListProps> = ({
  className,
  items,
  selectedId,
  onClick,
}) => {
  return (
    <StyledCategoryList className={`${className}`}>
      <h2>Category</h2>
      <div className="button_group">
        {items.map((item) => {
          const { id, color, name } = item;
          return (
            <SelectOptionButton
              className="m-4"
              key={id}
              color={color}
              label={name}
              selected={id === selectedId}
              onClick={() => onClick(id)}
            />
          );
        })}
      </div>
    </StyledCategoryList>
  );
};

const StyledCategoryList = styled.div`
  > .button_group {
    margin: 16px 0;
  }
`;
