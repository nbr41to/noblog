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
      <div className="fixed z-10">
        <NavMenu />
      </div>

      <header className="py-4">
        <div
          className="mx-auto w-fit cursor-pointer"
          onClick={() => router.push('/')}
        >
          <h1 className="font-baloo text-4xl">noblog</h1>
        </div>
      </header>

      <main className="mx-auto min-h-[calc(100vh-102px)] max-w-[1200px] pb-16">
        {children}
      </main>

      <footer className="w-full bg-slate-800 py-1 text-center text-white">
        <small>@2023</small>
      </footer>

      <ScrollTopButton />
    </div>
  );
};
