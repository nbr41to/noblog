import { VFC } from 'react';
import styled from 'styled-components';

/* NotionのpropertiesのCategoryやTags選択するボタン */

const colors = {
  orange: '#f9e8d8',
  blue: '#d8e8ef',
  red: '#fae0e0',
  green: '#d8eae7',
  yellow: '#faf1d6',
  gray: '#e8e9ea',
  pink: '#f2dae8',
  purple: '#e7e0f0',
  brown: '#e6e1df',
  default: '#eeeeee',
} as const;

type Color = keyof typeof colors;

type SelectOptionButtonProps = {
  className?: string;
  name: string;
  color: Color;
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
      className={`${className}`}
      color={color}
      selected={selected}
      onClick={onClick}
    >
      {name}
    </StyledSelectOptionButton>
  );
};

const StyledSelectOptionButton = styled.button<{
  selected: boolean;
  color: Color;
}>`
  background-color: ${({ color }) => colors[color]};
  ${({ selected }) => selected && 'filter: brightness(0.6)'};
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 6px;
  line-height: 20px;
  white-space: nowrap;
`;
