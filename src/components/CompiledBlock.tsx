import { VFC } from 'react';
import styled from 'styled-components';

const notion_types = [
  'paragraph',
  'unsupported',
  'heading_1',
  'heading_2',
  'heading_3',
  'bulleted_list_item',
  'numbered_list_item',
  'to_do',
  'toggle',
  'child_page',
] as const;

export type NotionBlockType = typeof notion_types[number];

type CompiledBlockProps = {
  block: any;
};

const compiledBlock = (block: any) => {
  for (const notion_type of notion_types) {
    if (block.type === notion_type) {
      if (block.type === 'unsupported') return <div>[Unsupported]</div>;
      return (
        <div
          className={`${notion_type} ${
            block.type === 'to_do' ? block.to_do.checked.toString() : ''
          }`}
        >
          {block[notion_type].text.map((t: any) => t.plain_text).join(' ')}
        </div>
      );
    }
  }
  return <p>[例外ブロックです]</p>;
};

export const CompiledBlock: VFC<CompiledBlockProps> = ({ block }) => {
  return <StyledCompiledBlock>{compiledBlock(block)}</StyledCompiledBlock>;
};

const StyledCompiledBlock = styled.div`
  > .paragraph {
    margin: 4px;
  }
  > .bulleted_list_item {
    padding-left: 12px;
    &:before {
      content: '＊';
    }
  }
  .to_do {
    padding-left: 12px;
    &.false {
      &:before {
        content: '□';
      }
    }
    &.true {
      &:before {
        content: '✔';
      }
    }
  }
`;
