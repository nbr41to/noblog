import { GetStaticProps, NextPage } from 'next';
import { ActivityScore } from 'src/components/Widget/ActivityScore';
import { SleepScore } from 'src/components/Widget/SleepScore';
import { TrendBoard } from 'src/components/Widget/TrendBoard';
import styled from 'styled-components';

import { getDatabaseInfo } from '@/apis/notion';
import { Profile } from '@/components/Home/Profile';
import { Topics } from '@/components/Home/Topics';
import { GitHubGrassImage } from '@/components/Widget/GitHubGrassImage';

export const getStaticProps: GetStaticProps = async () => {
  try {
    /* データベースに関するpropertiesを取得 */
    const databaseInfo = await getDatabaseInfo();
    return {
      props: {
        databaseInfo, // _app.tsxで使用
      },
    };
  } catch (error) {
    console.error(error);
  }
};

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
