import { VFC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

export const Header: VFC = () => {
  const router = useRouter();
  const currentPath = router.asPath.split('/')[1];

  return (
    <StyledHeader>
      <div className="site_logo">
        <div className="site_title" onClick={() => router.push('/')}>
          のぶろぐ。
        </div>
        <div className="sub_title">〜 のまど先生の生存確認日記 〜</div>
      </div>
      <nav aria-labelledby="aria-global-nav">
        <h3 id="aria-global-nav" className="menu_title_hidden">
          menu
        </h3>
        <div className="menu_item_list">
          <Link href="/">
            <a className={!currentPath ? 'active' : ''}>home</a>
          </Link>
          <Link href="/about">
            <a className={currentPath === 'about' ? 'active' : ''}>about</a>
          </Link>
          <Link href="/blogs/">
            <a className={currentPath === 'blogs' ? 'active' : ''}>blogs</a>
          </Link>
          <Link href="/contact">
            <a className={currentPath === 'contact' ? 'active' : ''}>contact</a>
          </Link>
        </div>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: rgba(250, 250, 250, 0.7);

  > .site_logo {
    padding: 8px 12px;
    text-align: center;
    > .site_title {
      font-size: 32px;
      font-weight: bold;
      display: inline-block;
      padding-left: 20px;
      cursor: pointer;
    }
  }
  > nav {
    > .menu_title_hidden {
      display: none;
    }
    > .menu_item_list {
      display: flex;
      justify-content: center;
      align-items: center;
      > a {
        font-size: 20px;
        font-weight: bold;
        padding: 12px;
        cursor: pointer;
        &.active {
          color: limegreen;
        }
      }
    }
  }
`;
