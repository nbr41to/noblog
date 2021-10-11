import { VFC } from 'react';
import styled from 'styled-components';

import { NotionBlock } from '@/type/notion';

import { compileText } from '../compileText';

type QuoteProps = {
  className?: string;
  block: Extract<NotionBlock, { type: 'quote' }>;
};

export const Quote: VFC<QuoteProps> = ({ className, block }) => {
  const { text } = block.quote;

  return (
    <StyledQuote className={`${className}`}>{compileText(text)}</StyledQuote>
  );
};

const StyledQuote = styled.blockquote`
  padding: 8px 16px;
  font-size: 18px;
  font-style: italic;
  line-height: 1.5;
  color: #444;
  background-color: #f5f5f5;
  border-left: 4px solid #444;
`;
