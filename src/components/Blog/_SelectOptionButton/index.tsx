import { VFC } from 'react';
import styled from 'styled-components';

/* NotionのpropertiesのCategoryやTags選択するボタン */

/* TODO）Labelと共通化したい */
const buttonColors = {
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

type Color = keyof typeof buttonColors;

type SelectOptionButtonProps = {
  className?: string;
  label: string;
  color: Color;
  selected?: boolean;
  onClick: () => void;
};

export const SelectOptionButton: VFC<SelectOptionButtonProps> = ({
  className,
  label,
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
      {label}
    </StyledSelectOptionButton>
  );
};

const StyledSelectOptionButton = styled.button<{
  selected: boolean;
  color: Color;
}>`
  background-color: ${({ color }) => buttonColors[color]};
  ${({ selected }) => selected && 'filter: brightness(0.6)'};
  box-shadow: -1px -1px 1.5px hsl(0deg 0% 100% / 95%),
    1px 1px 1.5px rgb(28 64 128 / 15%);

  padding: 8px 16px;
  cursor: pointer;
  border-radius: 6px;
  line-height: 20px;
  white-space: nowrap;
`;
