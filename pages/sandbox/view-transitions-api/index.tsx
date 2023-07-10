import type { NextPage } from 'next';
import type { FC } from 'react';

import { Prism } from '@mantine/prism';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { PageTitle } from '~/commons/PageTitle';

declare global {
  interface Document {
    startViewTransition: (callback: () => Promise<void>) => void;
  }
}

export const useViewTransition = <T extends (...args: any[]) => void>(
  callback: T
) => {
  const startViewTransition = (...args: Parameters<T>) => {
    if (typeof document === 'undefined') return;
    if (!document.startViewTransition) {
      callback(...args);

      return;
    }

    document.startViewTransition(async () => {
      await Promise.resolve(callback(...args));
    });
  };

  return { startViewTransition };
};

export const useTransitionRouterPush = () => {
  const router = useRouter();
  const routerPush = useCallback(
    async (to: string) => {
      await router.push(to);
    },
    [router]
  );
  const { startViewTransition: routerPushWithTransition } =
    useViewTransition(routerPush);

  return { routerPushWithTransition };
};

type Props = {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export const TransitionLink: FC<Props> = ({ href, children, onClick }) => {
  const { routerPushWithTransition } = useTransitionRouterPush();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (onClick) {
        onClick(e);
      }

      const to = e.currentTarget.href;
      routerPushWithTransition(to);
    },
    [routerPushWithTransition, onClick]
  );

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
};

const ViewTransitionsAPI: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <PageTitle title="ViewTransitionsAPI main page" />
      <div className="w-main mx-auto mt-8 space-y-3">
        <TransitionLink href="/sandbox/view-transitions-api/other">
          Go to other page with Animation
        </TransitionLink>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-60"
            src="/nob_lego.png"
            alt="nob_lego image"
            style={
              {
                viewTransitionName: 'photo-example',
              } as React.HTMLAttributes<HTMLDivElement>
            }
          />
        </div>
        <Prism language="javascript">{`declare global {
  interface Document {
    startViewTransition: (callback: () => Promise<void>) => void;
  }
}

export const useViewTransition = <T extends (...args: any[]) => void>(
  callback: T
) => {
  const startViewTransition = (...args: Parameters<T>) => {
    if (typeof document === 'undefined') return;
    if (!document.startViewTransition) {
      callback(...args);

      return;
    }

    document.startViewTransition(async () => {
      await Promise.resolve(callback(...args));
    });
  };

  return { startViewTransition };
};`}</Prism>
        <Prism language="javascript">{`export const useTransitionRouterPush = () => {
  const router = useRouter();
  const routerPush = useCallback(
    async (to: string) => {
      await router.push(to);
    },
    [router]
  );
  const { startViewTransition: routerPushWithTransition } =
    useViewTransition(routerPush);

  return { routerPushWithTransition };
};`}</Prism>
        <Prism language="javascript">{`your code`}</Prism>
      </div>
    </div>
  );
};

export default ViewTransitionsAPI;
