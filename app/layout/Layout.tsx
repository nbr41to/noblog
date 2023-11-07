'use client';

import type { FC, ReactNode } from 'react';
import type { NotionPost } from '~/types/notion';

import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

import { NavMenu } from '~/components/@layouts/NavMenu';
import { ScrollTopButton } from '~/components/@layouts/ScrollTopButton';

import { Breadcrumbs } from './ui/Breadcrumbs';
import { SearchButton } from './ui/SearchButton';
import { ToggleTheme } from './ui/ToggleTheme';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children, ...pageProps }) => {
  const router = useRouter();
  const titleEnum = useMemo(() => {
    if ('post' in pageProps) {
      return {
        ['[page_id]']: (pageProps.post as NotionPost).title,
      };
    } else {
      return undefined;
    }
  }, [pageProps]);

  return (
    <div className="bg-orange-100">
      <div className="fixed z-50 flex w-fit items-start justify-between">
        <NavMenu />
      </div>
      <div className="fixed right-2 top-2 z-50 hidden w-fit items-center gap-4 md:flex">
        <ToggleTheme />
        <SearchButton />
      </div>

      <header className="py-1">
        <div
          className={clsx(
            'mx-auto w-fit cursor-pointer py-4',
            'hover:title-drop-shadow transition duration-1000 ease-in hover:text-white',
          )}
          onClick={() => router.push('/')}
        >
          <h1 className="font-baloo text-[42px] leading-none">noblog</h1>
        </div>
      </header>

      <main className="relative z-10 mb-40 min-h-[calc(100vh-112px)] w-full bg-orange-100">
        <div className=" mx-auto max-w-[1280px]">
          <div className="ml-auto w-fit max-w-full overflow-x-scroll pr-8 sp:ml-0 sp:pl-4 sp:pr-0">
            <Breadcrumbs titleEnum={titleEnum} />
          </div>
          {children}
        </div>
        <div className="sticky bottom-0 p-4 text-right sp:p-2">
          <ScrollTopButton />
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 flex h-40 w-full flex-col justify-between bg-slate-800 px-8 text-white">
        <div className="mt-6">
          <div className="flex gap-2">
            <Image
              src="/logo_circle.png"
              alt="site logo"
              width={32}
              height={32}
              sizes="265px"
              priority
            />
            <Link href="/" className="font-baloo text-3xl text-white">
              noblog
            </Link>
          </div>
          <div className="mt-2 text-xs">
            Notion API と Next.js / Tailwind CSS で本格ブログを作ってみました。
          </div>
        </div>
        <div className="py-2 text-center text-xs font-bold text-slate-200">
          Made with Notion by nobuyuki @2023
        </div>
      </footer>
    </div>
  );
};
