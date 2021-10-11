import { memo, VFC } from 'react';
import styled from 'styled-components';

import { NotionBlock } from '@/type/notion';

import { compileText } from '../compileText';

type QuoteProps = {
  className?: string;
  block: Extract<NotionBlock, { type: 'quote' }>;
};

const Component: VFC<QuoteProps> = ({ className, block }) => {
  const { text } = block.quote;

  return (
    <StyledQuote className={`${className}`}>{compileText(text)}</StyledQuote>
  );
};

const StyledQuote = styled.blockquote`
  padding: 24px 20px;
  margin: 16px 8px;
  font-size: 18px;
  font-style: italic;
  letter-spacing: 1.6px;
  color: #333;
  background-color: #e5e5e5;
  border-radius: 8px;
  box-shadow: inset -1.5px -2px 2px hsl(0deg 0% 100% / 95%),
    inset 1px 1px 4px rgb(28 64 128 / 15%);
`;

export const Quote = memo(Component);
