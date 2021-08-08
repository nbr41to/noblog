import { VFC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

export const Header: VFC = () => {
  const router = useRouter();
  return (
    <StyledHeader>
      <div className="site_logo">
        <div className="site_title" onClick={() => router.push('/')}>
          のぶろぐ。
        </div>
      </div>
      <nav aria-labelledby="aria-global-nav">
        <h3 id="aria-global-nav" className="menu_title">
          menu
        </h3>
        <div className="menu_item_list">
          <Link href="/">
            <a>home</a>
          </Link>
          <Link href="/about">
            <a>about</a>
          </Link>
          <Link href="/blogs/">
            <a>blogs</a>
          </Link>
          <Link href="/contact">
            <a>contact</a>
          </Link>
        </div>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #f9f9f9;

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
    display: flex;
    justify-content: center;
    align-items: center;

    > .menu_title {
      margin-right: 12px;
    }
    > .menu_item_list {
      > a {
        padding: 0 8px;
        cursor: pointer;
      }
    }
  }
`;
