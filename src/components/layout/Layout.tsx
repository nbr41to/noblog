import type { FC, ReactNode } from 'react';

import { useRouter } from 'next/router';

import { NavMenu } from './NavMenu';
import { ScrollTopButton } from './ScrollTopButton';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      <div className='fixed'>
        <NavMenu />
      </div>

      <header className='py-4'>
        <div
          className='mx-auto w-fit cursor-pointer'
          onClick={() => router.push('/')}
        >
          <h1 className='font-baloo text-4xl'>noblog</h1>
        </div>
      </header>

      <main className='mx-auto max-w-[1200px]'>{children}</main>

      <footer className='fixed bottom-0 w-full text-center'>
        <small>@2023</small>
      </footer>
      <ScrollTopButton />
    </div>
  );
};
