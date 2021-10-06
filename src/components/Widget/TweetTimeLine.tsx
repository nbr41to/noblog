import Script from 'next/script';
import { memo, useEffect, VFC } from 'react';
import styled from 'styled-components';

type TweetTimeLineProps = {
  className?: string;
};

// eslint-disable-next-line react/display-name
export const TweetTimeLine: VFC<TweetTimeLineProps> = memo(({ className }) => {
  useEffect(() => {
    if (!process.browser) return;
    window.twttr?.widgets.load();
  }, []);

  return (
    <StyledTweetTimeLine className={`${className} p-8`}>
      <h3>tweets</h3>
      <div className="tweet">
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
      </div>
    </StyledTweetTimeLine>
  );
});

const StyledTweetTimeLine = styled.div`
  ${({ theme }) => theme.box.inner};
  h3 {
    ${({ theme }) => theme.mixins.asideTitle};
  }
  > .tweet {
    height: 800px;
    ${({ theme }) => theme.media.sp`
      height: 400px;
    `};
  }

  iframe {
    border-radius: 8px;
  }
`;
