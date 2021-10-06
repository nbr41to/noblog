import Link from 'next/link';
import { useRouter } from 'next/router';
import { VFC } from 'react';
import styled from 'styled-components';

type MenuProps = {
  className?: string;
};

export const Menu: VFC<MenuProps> = ({ className }) => {
  const router = useRouter();
  const currentPath = router.asPath.split('/')[1].split('?')[0];

  return (
    <StyledMenu aria-labelledby="aria-global-nav" className={`${className}`}>
      <h3 id="aria-global-nav" className="menu_title_hidden">
        menu
      </h3>
      <div className="menu_item_list">
        <Link href="/">
          <a className={!currentPath ? 'active' : ''}>home</a>
        </Link>
        <Link href="/activities">
          <a className={currentPath === 'activities' ? 'active' : ''}>
            activities
          </a>
        </Link>
        <Link href="/blogs/">
          <a className={currentPath === 'blogs' ? 'active' : ''}>blogs</a>
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
    height: 52px;
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
