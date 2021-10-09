import { VFC } from 'react';
import styled from 'styled-components';

/* NotionのpropertiesのCategoryやTagsを表示するBadge的なもの */

type SelectOptionLabelProps = {
  className?: string;
  name: string;
  color: string;
  click?: boolean;
};

export const SelectOptionLabel: VFC<SelectOptionLabelProps> = ({
  className,
  name,
  color,
  click = false, // TODO)今後押した時にそれに関するページを表示するようにする
}) => {
  return (
    <StyledSelectOptionLabel
      className={`${className} ${color}`}
      // onClick={click}
    >
      {name}
    </StyledSelectOptionLabel>
  );
};

const StyledSelectOptionLabel = styled.span`
  font-size: 14px;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: -1px -1px 1.5px hsl(0deg 0% 100% / 95%),
    1px 1px 1.5px rgb(28 64 128 / 15%);
  line-height: 16px;
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
