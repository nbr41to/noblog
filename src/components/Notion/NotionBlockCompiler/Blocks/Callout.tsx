import { memo, VFC } from 'react';
import styled from 'styled-components';

import { NotionBlock } from '@/type/notion';

import { compileText } from '../compileText';

type CalloutProps = {
  className?: string;
  block: Extract<NotionBlock, { type: 'callout' }>;
};

const Component: VFC<CalloutProps> = ({ className, block }) => {
  const { text } = block.callout;
  const { icon } = block.callout;
  const emoji = icon.type === 'emoji' ? icon.emoji : '🐮';

  return (
    <StyledCallout className={`${className}`}>
      <div className="icon">{emoji}</div>
      <div className="text">{compileText(text)}</div>
    </StyledCallout>
  );
};

const StyledCallout = styled.blockquote`
  padding: 24px 20px;
  margin: 16px 8px;
  color: #333;
  background-color: #e5e5e5;
  border-radius: 8px;
  box-shadow: inset -1.5px -2px 2px hsl(0deg 0% 100% / 95%),
    inset 1px 1px 4px rgb(28 64 128 / 15%);
  display: flex;
  align-items: center;

  > .icon {
    font-size: 20px;
    width: 32px;
    height: 32px;
    margin-right: 8px;
    background-color: #f5f5f5;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > .text {
  }
`;

export const Callout = memo(Component);
