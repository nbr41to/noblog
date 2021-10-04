import { VFC } from 'react';

import { compiledBlock } from './compiledBlock';
import { StyledNotionBlock } from './NotionBlock.styled';

type CompiledBlockProps = {
  block: any;
};

export const NotionBlock: VFC<CompiledBlockProps> = ({ block }) => {
  return <StyledNotionBlock>{compiledBlock(block)}</StyledNotionBlock>;
};
