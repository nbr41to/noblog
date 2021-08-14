import { useEffect, VFC } from 'react';
import styled from 'styled-components';
import Script from 'next/script';

type TweetTimeLineProps = {
  className?: string;
};

export const TweetTimeLine: VFC<TweetTimeLineProps> = ({ className }) => {
  useEffect(() => {
    if (!process.browser) return;
    window.twttr?.widgets.load();
  }, []);

  return (
    <StyledTweetTimeLine className={className}>
      <a
        className="twitter-timeline"
        data-width="100%"
        data-height="100%"
        data-dnt="true"
        data-theme="light"
        data-interception="off"
        href="https://twitter.com/Knob_nbr41to?ref_src=twsrc%5Etfw"
      >
        Tweets by Knob_nbr41to
      </a>
      <Script src="https://platform.twitter.com/widgets.js" />
    </StyledTweetTimeLine>
  );
};

const StyledTweetTimeLine = styled.div`
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #fffc;
  padding: 8px;

  iframe {
    border-radius: 8px;
  }
`;
