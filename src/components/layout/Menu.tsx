import { VFC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

type MenuProps = {
  className?: string;
};

export const Menu: VFC<MenuProps> = ({ className }) => {
  const router = useRouter();
  const currentPath = router.asPath.split('/')[1];

  return (
    <StyledMenu aria-labelledby="aria-global-nav" className={className}>
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
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  background-color: #fffa;
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
`;
