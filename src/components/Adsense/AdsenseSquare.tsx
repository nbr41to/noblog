import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect, VFC } from 'react';
import styled from 'styled-components';

type AdsenseSquareProps = {
  className?: string;
};

export const AdsenseSquare: VFC<AdsenseSquareProps> = ({ className }) => {
  const { asPath } = useRouter();

  useEffect(() => {
    try {
      if (!window.adsbygoogle || !(process.env.NODE_ENV !== 'development'))
        return;
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, [asPath]);
  return (
    <StyledAdsenseSquare key={asPath} className={`${className}`}>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6112933602862239"
        crossOrigin="anonymous"
      ></Script>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client="ca-pub-6112933602862239"
        data-ad-slot="5310701385"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </StyledAdsenseSquare>
  );
};

const StyledAdsenseSquare = styled.div`
  min-width: 1px;
`;
