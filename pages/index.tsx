import { VFC } from 'react';
import { TrendBoard } from 'src/components/Home/TrendBoard';
import styled from 'styled-components';
import { GitHubGrassImage } from 'src/components/Home/GitHubGrassImage';
import { ActivityScore } from 'src/components/Widget/ActivityScore';
import { SleepScore } from 'src/components/Widget/SleepScore';

const HomePage: VFC = () => {
  return (
    <StyledHomePage>
      <h1>my recent</h1>
      <div className="content_wrapper">
        <GitHubGrassImage className="ghg" />
        <SleepScore className="slp" />
        <ActivityScore className="act" />
        <TrendBoard className="trend" />
      </div>
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
