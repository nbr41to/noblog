import { ReactNode, VFC } from 'react';
import styled from 'styled-components';
import { Header } from './Header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: VFC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  > main {
    padding: 0 20px;
  }
`;
