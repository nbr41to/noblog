import { useRouter } from 'next/router';
import { FC, ReactNode, useState } from 'react';
import { ScrollTopButton } from './ScrollTopButton';
import { GiCow } from 'react-icons/gi';
import Link from 'next/link';
import { useHover } from '@mantine/hooks';
import { Transition } from '@mantine/core';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const { hovered, ref } = useHover();

  return (
    <div>
      <header className='py-4'>
        <div
          className='mx-auto w-fit cursor-pointer'
          onClick={() => router.push('/')}
        >
          <h1 className='font-baloo text-4xl'>noblog</h1>
        </div>
      </header>

      <nav ref={ref} className='relative w-fit cursor-pointer'>
        <GiCow className='rounded-full bg-slate-800 p-2 text-white' size={36} />
        <div className='text-center'>MENU</div>
        <Transition
          mounted={hovered}
          transition='slide-down'
          timingFunction='ease'
        >
          {(styles) => (
            <div
              className='absolute mt-4 flex flex-col items-center justify-center gap-2'
              style={styles}
            >
              <Link href='/posts'>Blogs</Link>
              <Link href='/posts'>About</Link>
              <Link href='/posts'>Notion</Link>
            </div>
          )}
        </Transition>
      </nav>

      <main className='mx-auto max-w-[1200px]'>{children}</main>

      <footer>
        <small>2023</small>
      </footer>
      <ScrollTopButton />
    </div>
  );
};
