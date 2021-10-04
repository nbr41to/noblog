import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect, VFC } from 'react';
import styled from 'styled-components';

type AdsenseRowProps = {
  className?: string;
};

export const AdsenseRow: VFC<AdsenseRowProps> = ({ className }) => {
  const { asPath } = useRouter();

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, [asPath]);
  return (
    <StyledAdsenseRow key={asPath} className={`${className}`}>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6112933602862239"
        crossOrigin="anonymous"
      ></Script>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client="ca-pub-6112933602862239"
        data-ad-slot="2397597588"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </StyledAdsenseRow>
  );
};

const StyledAdsenseRow = styled.div`
  min-width: 1px;
`;
