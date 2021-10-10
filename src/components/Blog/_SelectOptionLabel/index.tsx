import { VFC } from 'react';
import styled from 'styled-components';

/* NotionのpropertiesのCategoryやTagsを表示するBadge的なもの */

/* TODO）Buttonと共通化したい */
const labelColors = {
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

type Color = keyof typeof labelColors;
type SelectOptionLabelProps = {
  className?: string;
  label: string;
  color: Color;
  click?: boolean;
};

export const SelectOptionLabel: VFC<SelectOptionLabelProps> = ({
  className,
  label,
  color,
}) => {
  return (
    <StyledSelectOptionLabel className={`${className}`} color={color}>
      {label}
    </StyledSelectOptionLabel>
  );
};

const StyledSelectOptionLabel = styled.span<{ color: Color }>`
  font-size: 14px;
  padding: 6px 12px;
  cursor: pointer;
  background-color: ${({ color }) => labelColors[color]};
  border-radius: 4px;
  box-shadow: -1px -1px 1.5px hsl(0deg 0% 100% / 95%),
    1px 1px 1.5px rgb(28 64 128 / 15%);
  line-height: 16px;
  white-space: nowrap;
`;
