import { ReactNode, VFC } from 'react';
import styled from 'styled-components';

import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
import { Right } from './Right';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: VFC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Header className="header" />
      <Main className="main">{children}</Main>
      <Right className="right" />
      <Footer className="footer" />
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

  display: grid;
  grid-template:
    ' header header header header header header header ' auto
    ' ...... ...... ...... ...... ...... ...... ...... ' 12px
    ' ...... main   main   main   ...... right  ...... ' auto
    ' ...... ...... ...... ...... ...... ...... ...... ' 20px
    ' footer footer footer footer footer footer footer ' 60px /
    40px 0 0 1fr 20px 280px 40px;

  ${({ theme }) => theme.media.sp`
    grid-template:
      ' header header header header header header header ' auto
      ' ...... ...... ...... ...... ...... ...... ...... ' 0
      ' ...... main   main   main   main   main   ...... ' auto
      ' ...... right  right  right  right  right  ...... ' auto
      ' footer footer footer footer footer footer footer ' 60px /
        0      1fr    1fr    1fr    1fr    1fr    0;
  `}

  > .header {
    grid-area: header;
  }
  > .main {
    grid-area: main;
  }
  > .right {
    grid-area: right;
  }
  > .footer {
    grid-area: footer;
  }
`;
