import { VFC } from 'react';
import styled from 'styled-components';

import { NotionSelectOption } from '@/type/notion';

import { SelectOptionButton } from './_SelectOptionButton';

type TagListProps = {
  className?: string;
  items: NotionSelectOption[];
  selectedIds: string[];
  onClick: (id: string) => void;
};

export const TagList: VFC<TagListProps> = ({
  className,
  items,
  selectedIds,
  onClick,
}) => {
  const lineIndex = Math.ceil(items.length / 3);

  return (
    <StyledTagList className={`${className}`}>
      <h2>Tag</h2>
      <div className="button_line_list">
        <div className="button_line">
          {items.slice(0, lineIndex).map((item) => {
            const { id, color, name } = item;
            return (
              <SelectOptionButton
                className="m-4"
                key={id}
                color={color}
                name={name}
                selected={selectedIds.includes(id)}
                onClick={() => onClick(id)}
              />
            );
          })}
        </div>
        <div className="button_line">
          {items.slice(lineIndex, lineIndex * 2).map((item) => {
            const { id, color, name } = item;
            return (
              <SelectOptionButton
                className="m-4"
                key={id}
                color={color}
                name={name}
                selected={selectedIds.includes(id)}
                onClick={() => onClick(id)}
              />
            );
          })}
        </div>
        <div className="button_line">
          {items.slice(lineIndex * 2).map((item) => {
            const { id, color, name } = item;
            return (
              <SelectOptionButton
                className="m-4"
                key={id}
                color={color}
                name={name}
                selected={selectedIds.includes(id)}
                onClick={() => onClick(id)}
              />
            );
          })}
        </div>
      </div>
    </StyledTagList>
  );
};

const StyledTagList = styled.div`
  > .button_line_list {
    margin: 16px 0;
    > .button_line {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      overflow-x: scroll;
    }
  }
`;
