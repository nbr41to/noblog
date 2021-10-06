import { useRouter } from 'next/router';
import { VFC } from 'react';
import styled from 'styled-components';

import { Hero } from './Hero';
import { Menu } from './Menu';

type HeaderProps = {
  className?: string;
};

export const Header: VFC<HeaderProps> = ({ className }) => {
  const router = useRouter();
  const currentPath = router.asPath.split('/')[1].split('?')[0];

  return (
    <StyledHeader className={`${className}`}>
      <div className="site_title" onClick={() => router.push('/')}>
        のぶろぐ。
      </div>
      <div className="sub_title">〜 のまど先生の生存確認日記 〜</div>
      {!currentPath && <Hero />}
      <Menu />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #fffa;
  padding: 12px;
  text-align: center;

  ${({ theme }) => theme.media.sp`
    padding: 12px 0;
  `}

  > .site_title {
    font-size: 32px;
    font-weight: bold;
    display: inline-block;
    padding-left: 20px;
    cursor: pointer;
  }
  > .sub_title {
    margin: 8px 0;
  }
`;
