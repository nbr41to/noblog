import { VFC } from 'react';
import { StyledNotionBlock } from './NotionBlock.styled';
import { compiledBlock } from './compiledBlock';

type CompiledBlockProps = {
  block: any;
};

export const NotionBlock: VFC<CompiledBlockProps> = ({ block }) => {
  return <StyledNotionBlock>{compiledBlock(block)}</StyledNotionBlock>;
};
