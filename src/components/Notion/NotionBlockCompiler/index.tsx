import { VFC } from 'react';

import { compiledBlock } from './compiledBlock';
import { StyledNotionBlock } from './index.styled';

type CompiledBlockProps = {
  block: any;
};

export const NotionBlockCompiler: VFC<CompiledBlockProps> = ({ block }) => {
  return <StyledNotionBlock>{compiledBlock(block)}</StyledNotionBlock>;
};
