import { ReactNode, VFC } from 'react';
import styled from 'styled-components';
import { Footer } from './Footer';
import { Header } from './Header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: VFC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  background-image: url('/bg_image.png');
  background-color: rgba(255, 255, 255, 0.8);
  background-blend-mode: lighten;
  background-size: 1280px;
  position: relative;

  > main {
    height: 100%;
    padding: 0 20px 52px;
    overflow-y: scroll;
  }
`;
