import { VFC } from 'react';
import { TweetTimeLine } from 'src/components/Home/TweetTimeLine';
import { TrendBoard } from 'src/components/Home/TrendBoard';
import styled from 'styled-components';
import { GitHubGrassImage } from 'src/components/Home/GitHubGrassImage';

const HomePage: VFC = () => {
  return (
    <StyledHomePage>
      <h1>my recent</h1>
      <div className="content_wrapper">
        <GitHubGrassImage className="ghg" />
        <TrendBoard className="trend" />
        <TweetTimeLine className="ttl" />
      </div>
    </StyledHomePage>
  );
};

const StyledHomePage = styled.div`
  background-color: #fffc;
  margin: 20px 0;
  padding: 20px 32px;
  border: 1px solid #444;
  border-radius: 8px;

  > .content_wrapper {
    display: grid;
    grid-template:
      ' ..... ..... ..... ..... ..... ' 20px
      ' ghg   ghg   ghg   ghg   ghg   ' auto
      ' ..... ..... ..... ..... ..... ' 20px
      ' trend trend trend ..... ttl   ' 800px
      ' ..... ..... ..... ..... ..... ' 20px /
      0 0 1fr 20px 300px;
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
