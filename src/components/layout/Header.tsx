import { useRouter } from 'next/router';
import { VFC } from 'react';
import styled from 'styled-components';

type HeaderProps = {
  className?: string;
};

export const Header: VFC<HeaderProps> = ({ className }) => {
  const router = useRouter();

  return (
    <StyledHeader className={`${className}`}>
      <div className="site_title" onClick={() => router.push('/')}>
        のぶろぐ。
      </div>
      <div className="sub_title">〜 のまど先生の生存確認日記 〜</div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #fffa;
  padding: 12px;
  text-align: center;
  > .site_title {
    font-size: 32px;
    font-weight: bold;
    display: inline-block;
    padding-left: 20px;
    cursor: pointer;
  }
`;
