import { NextPage } from 'next';
import styled from 'styled-components';

import { Profile } from '@/components/Home/Profile';
import { Topics } from '@/components/Home/Topics';

const HomePage: NextPage = () => {
  return (
    <StyledHomePage>
      <Topics />
      <Profile />
    </StyledHomePage>
  );
};

const StyledHomePage = styled.div`
  padding: 20px 32px;
  ${({ theme }) => theme.media.sp`
    padding: 12px;
  `}

  > .content_wrapper {
    /* display: grid; */
    /* grid-template:
      ' ..... ..... ..... ..... ..... ' 20px
      ' ghg   ghg   ghg   ghg   ghg   ' auto
      ' ..... ..... ..... ..... ..... ' 20px
      ' trend trend trend ..... ttl   ' 800px
      ' ..... ..... ..... ..... ..... ' 20px /
      0 0 1fr 20px 300px; */

    /* ${({ theme }) => theme.media.sp`
      grid-template:
        ' ..... ..... ..... ..... ..... ' 20px
        ' ghg   ghg   ghg   ghg   ghg   ' auto
        ' ..... ..... ..... ..... ..... ' 20px
        ' trend trend trend trend trend ' 600px
        ' ..... ..... ..... ..... ..... ' 20px
        ' ttl   ttl   ttl   ttl   ttl   ' 600px
        ' ..... ..... ..... ..... ..... ' 20px /
        auto;
  `}; */
  }
  .ghg {
    grid-area: ghg;
  }
  .trend {
    grid-area: trend;
  }
  .ttl {
    grid-area: ttl;
  }
`;

export default HomePage;
