'use client';

import type { SpotlightActionData } from '@mantine/spotlight';

import { Spotlight as MantineSpotlight } from '@mantine/spotlight';
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

export const Spotlight = () => {
  const router = useRouter();

  const actions: SpotlightActionData[] = useMemo(
    () => [
      {
        id: 'home',
        title: 'Home',
        description:
          'サイトのトップページに移動します。サイトロゴをクリックすることでも移動できます。',
        icon: <HomeIcon size={28} />,
        onTrigger: () => router.push('/'),
      },
      {
        id: 'blogs',
        title: 'Blogs',
        description: 'ブログの記事一覧ページに移動します。',
        icon: <BookIcon size={28} />,
        onTrigger: () => router.push('/posts'),
      },
      {
        id: 'profile',
        title: 'Profile',
        description: 'サイト作成者のプロフィール詳細ページに移動します。',
        icon: <ProfileIcon size={28} />,
        onTrigger: () => router.push('/profile'),
      },
      {
        id: 'contact',
        title: 'Contact',
        description: 'サイト作成者と連絡を取りたい方はこちら',
        icon: <MailIcon size={28} />,
        onTrigger: () => router.push('/contact'),
      },
      {
        id: 'sandbox',
        title: 'Sandbox',
        description: 'サイト作成者が好き勝手遊んでいる実験用のページ',
        icon: <ExperimentIcon size={28} />,
        onTrigger: () => router.push('/sandbox'),
      },
    ],
    [router],
  );

  return (
    <MantineSpotlight
      shortcut="mod + k"
      actions={actions}
      limit={20}
      searchProps={{
        placeholder: 'Search...',
        autoFocus: true,
        leftSection: <SearchIcon size={18} />,
      }}
      nothingFound="Nothing found..."
      withinPortal
      highlightQuery
    />
  );
};
