import { ReactNode, VFC } from 'react';
import styled from 'styled-components';

type MainProps = {
  className?: string;
  children: ReactNode;
};

export const Main: VFC<MainProps> = ({ className, children }) => {
  return <StyledMain className={className}>{children}</StyledMain>;
};

const StyledMain = styled.main`
  height: 100%;
  ${({ theme }) => theme.box.outer}
  ${({ theme }) => theme.media.sp`
      background-color: #fffc;
      border: none;
      border-radius: 0;
  `};
`;
