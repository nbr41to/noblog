import '~/styles/globals.css';
import '~/styles/body-before.css';
import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';

import type { AppProps } from 'next/app';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Spotlight } from '@mantine/spotlight';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import { useMemo, useState } from 'react';
import { RecoilRoot } from 'recoil';

import {
  BookIcon,
  ExperimentIcon,
  HomeIcon,
  MailIcon,
  ProfileIcon,
  SearchIcon,
} from '~/commons/icons';
import { useSpotlightActions } from '~/hooks/apiHooks/useSpotlightActions';
import { GoogleTagManager } from '~/layouts/GoogleTagManager';
import { Layout } from '~/layouts/Layout';
import { googleTagManagerId } from '~/types/gtm';

const meta = {
  title: 'noblog',
  description:
    'Notion API と Next.js / Tailwind CSS で本格ブログを作ってみました。',
  url: 'https://www.nbr41.com/',
  image: 'https://www.nbr41.com/noblog.png',
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const defaultActions = useMemo(
    () => [
      {
        id: 'home',
        title: 'Home',
        description:
          'サイトのトップページに移動します。サイトロゴをクリックすることでも移動できます。',
        icon: <HomeIcon size={28} />,
        onClick: () => router.push('/'),
      },
      {
        id: 'posts',
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
  const [query, setQuery] = useState('');
  const actions = useSpotlightActions(query);

  return (
    <>
      <GoogleTagManager gtmId={googleTagManagerId} />
      {/* meta seo */}
      <DefaultSeo
        defaultTitle={meta.title}
        description={meta.description}
        openGraph={{
          type: 'website',
          title: meta.title,
          description: meta.description,
          site_name: meta.title,
          url: meta.url,
          images: [
            {
              url: meta.image,
              width: 800,
              height: 600,
              alt: 'Site Image',
              type: 'image/png',
            },
          ],
        }}
        twitter={{
          handle: '@Knob_nbr41to',
          site: '@Knob_nbr41to',
          cardType: 'summary_large_image',
        }}
      />
      {/* meta seo */}
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <SessionProvider session={pageProps.session}>
        <MantineProvider>
          <RecoilRoot>
            <Spotlight
              shortcut="mod + k"
              actions={actions}
              filter={(q, actions) => {
                const filteredDefaultActions = defaultActions.filter(
                  (action) =>
                    action.title.toLowerCase().indexOf(q.toLowerCase()) !== -1,
                );

                return [...filteredDefaultActions, ...actions];
              }}
              limit={20}
              searchProps={{
                leftSection: <SearchIcon size={18} />,
                placeholder: 'Search...',
                autoFocus: true,
              }}
              nothingFound="Nothing found..."
              withinPortal
              highlightQuery
              onQueryChange={(query) => setQuery(query)}
            />
            <Layout {...pageProps}>
              <Component {...pageProps} />
            </Layout>
            <Notifications position="top-center" />
          </RecoilRoot>
        </MantineProvider>
      </SessionProvider>
    </>
  );
}
