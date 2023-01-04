import '~/styles/globals.css';

import type { AppProps } from 'next/app';

import { NotificationsProvider } from '@mantine/notifications';
import { SpotlightProvider } from '@mantine/spotlight';
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { RecoilRoot } from 'recoil';

import {
  BookIcon,
  ExperimentIcon,
  HomeIcon,
  MailIcon,
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
        title: 'Home',
        icon: <HomeIcon size={24} />,
        onTrigger: () => router.push('/'),
      },
      {
        title: 'Blog',
        icon: <BookIcon size={20} className="mx-0.5" />,
        onTrigger: () => router.push('/posts'),
      },
      {
        title: 'Sandbox',
        icon: <ExperimentIcon size={24} />,
        onTrigger: () => router.push('/sandbox'),
      },
      {
        title: 'Contact',
        icon: <MailIcon size={24} />,
        onTrigger: () => router.push('/contact'),
      },
    ],
    [router]
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
        <RecoilRoot>
          <SpotlightProvider
            shortcut="mod + k"
            actions={actions}
            filter={(q, actions) => {
              const filteredDefaultActions = defaultActions.filter(
                (action) =>
                  action.title.toLowerCase().indexOf(q.toLowerCase()) !== -1
              );

              return [...filteredDefaultActions, ...actions];
            }}
            limit={20}
            searchIcon={<SearchIcon size={18} />}
            searchPlaceholder="Search..."
            nothingFoundMessage="Nothing found..."
            withinPortal
            highlightQuery
            overlayOpacity={0.3}
            onQueryChange={(query) => setQuery(query)}
            styles={{
              spotlight: {
                maxHeight: '60vh',
              },
            }}
          >
            <NotificationsProvider position="top-center">
              <Layout {...pageProps}>
                <Component {...pageProps} />
              </Layout>
            </NotificationsProvider>
          </SpotlightProvider>
        </RecoilRoot>
      </SessionProvider>
    </>
  );
}
