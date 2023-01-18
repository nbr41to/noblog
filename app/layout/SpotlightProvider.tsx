'use client';
import 'src/styles/globals.css';
import type { ReactNode } from 'react';

import { SpotlightProvider as MantineSpotlightProvider } from '@mantine/spotlight';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

import {
  BookIcon,
  ExperimentIcon,
  HomeIcon,
  MailIcon,
  ProfileIcon,
  SearchIcon,
} from '~/components/@commons/icons';

export const SpotlightProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const actions = useMemo(
    () => [
      {
        title: 'Home',
        description:
          'サイトのトップページに移動します。サイトロゴをクリックすることでも移動できます。',
        icon: <HomeIcon size={28} />,
        onTrigger: () => router.push('/'),
      },
      {
        title: 'Blogs',
        description: 'ブログの記事一覧ページに移動します。',
        icon: <BookIcon size={28} />,
        onTrigger: () => router.push('/posts'),
      },
      {
        title: 'Profile',
        description: 'サイト作成者のプロフィール詳細ページに移動します。',
        icon: <ProfileIcon size={28} />,
        onTrigger: () => router.push('/profile'),
      },
      {
        title: 'Contact',
        description: 'サイト作成者と連絡を取りたい方はこちら',
        icon: <MailIcon size={28} />,
        onTrigger: () => router.push('/contact'),
      },
      {
        title: 'Sandbox',
        description: 'サイト作成者が好き勝手遊んでいる実験用のページ',
        icon: <ExperimentIcon size={28} />,
        onTrigger: () => router.push('/sandbox'),
      },
    ],
    [router]
  );

  return (
    <MantineSpotlightProvider
      shortcut="mod + k"
      actions={actions}
      limit={20}
      searchIcon={<SearchIcon size={18} />}
      searchPlaceholder="Search..."
      nothingFoundMessage="Nothing found..."
      withinPortal
      highlightQuery
      overlayOpacity={0.3}
      styles={{
        spotlight: {
          maxHeight: '60vh',
        },
      }}
    >
      {children}
    </MantineSpotlightProvider>
  );
};
