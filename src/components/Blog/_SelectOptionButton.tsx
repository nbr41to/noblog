import { VFC } from 'react';
import styled from 'styled-components';

/* NotionのpropertiesのCategoryやTags選択するボタン */

type SelectOptionButtonProps = {
  className?: string;
  name: string;
  color: string;
  selected?: boolean;
  onClick: () => void;
};

export const SelectOptionButton: VFC<SelectOptionButtonProps> = ({
  className,
  name,
  color,
  selected = false,
  onClick,
}) => {
  return (
    <StyledSelectOptionButton
      className={`${className} ${color}`}
      selected={selected}
      onClick={onClick}
    >
      {name}
    </StyledSelectOptionButton>
  );
};

const StyledSelectOptionButton = styled.button<{ selected: boolean }>`
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 6px;
  ${({ selected }) => selected && 'filter: brightness(0.6);'}
  line-height: 20px;
  white-space: nowrap;

  &.orange {
    background-color: #f9e8d8cc;
  }
  &.blue {
    background-color: #d8e8efcc;
  }
  &.red {
    background-color: #fae0e0cc;
  }
  &.green {
    background-color: #d8eae7cc;
  }
  &.yellow {
    background-color: #faf1d6cc;
  }
  &.gray {
    background-color: #e8e9eacc;
  }
  &.pink {
    background-color: #f2dae8cc;
  }
  &.purple {
    background-color: #e7e0f0cc;
  }
  &.brown {
    background-color: #e6e1dfcc;
  }
  &.default {
    background-color: #eeeeeecc;
  }
`;
