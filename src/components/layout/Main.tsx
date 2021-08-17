import { ReactNode, VFC } from 'react';
import styled from 'styled-components';

type MainProps = {
  className?: string;
  children: ReactNode;
};

export const Main: VFC<MainProps> = ({ className, children }) => {
  return <StyledMain className={`${className}`}>{children}</StyledMain>;
};

const StyledMain = styled.main`
  position: relative;

  ${({ theme }) => theme.box.outer}
  padding: 20px 32px;
  ${({ theme }) => theme.media.sp`
    padding: 12px;
    background-color: #fffc;
    border: none;
    border-radius: 0;
  `};
`;
