import type { FC } from 'react';

import { clsx, Transition } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { GiCow } from 'react-icons/gi';

import { NavMenuLink } from './NavMenuLink';

export const NavMenu: FC = () => {
  const { hovered, ref } = useHover();

  return (
    <nav ref={ref} className='w-fit cursor-pointer p-3'>
      <div
        className={clsx(
          'flex flex-col items-center justify-center transition-colors duration-300',
          hovered && 'text-white',
        )}
      >
        <GiCow size={36} />
        <div className='font-bold'>MENU</div>
      </div>

      <Transition
        mounted={hovered}
        transition='slide-right'
        timingFunction='ease'
        duration={400}
      >
        {(styles) => (
          <div
            className='fixed top-0 left-0 -z-10 h-screen space-y-2 bg-slate-800 px-6 pt-28'
            style={styles}
          >
            <NavMenuLink href='/' label='Home' />
            <NavMenuLink href='/posts' label='Blogs' />
            <NavMenuLink href='/sandbox' label='Sandbox' />
            <NavMenuLink href='/posts/zenn-list' label='Zenn' />
            <NavMenuLink href='/' label='Comments' />
            <NavMenuLink href='/' label='Profile' />
            <NavMenuLink href='/' label='Contact' />
            <NavMenuLink href='/' label='SNS' />
          </div>
        )}
      </Transition>
    </nav>
  );
};
