import type { FC, ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';
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
      <div className="fixed z-50">
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

      <main className="relative z-10 mb-40 min-h-[calc(100vh-102px)] w-full bg-orange-100 pb-20">
        <div className=" mx-auto max-w-[1200px]">{children}</div>
      </main>

      <footer className="fixed bottom-0 flex h-40 w-full flex-col justify-between bg-slate-800 px-8 text-white">
        <div className="mt-6">
          <div className="flex gap-2">
            <Image
              src="/logo_circle.png"
              width={32}
              height={32}
              alt="site logo"
            />
            <Link href="/" className="font-baloo text-3xl text-white">
              noblog
            </Link>
          </div>
          <div className="mt-2 text-xs">
            Notion API と Next.js Tailwind CSS で本格ブログを作ってみました。
          </div>
        </div>

        <div className="py-2 text-center text-xs font-bold text-slate-200">
          Made with Notion by nobuyuki @2023
        </div>
      </footer>

      <ScrollTopButton />
    </div>
  );
};
