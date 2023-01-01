import '~/styles/globals.css';

import type { AppProps } from 'next/app';

import { NotificationsProvider } from '@mantine/notifications';
import { DefaultSeo } from 'next-seo';
import { RecoilRoot } from 'recoil';

import { GoogleTagManager } from '~/layouts/GoogleTagManager';
import { Layout } from '~/layouts/Layout';
import { googleTagManagerId } from '~/types/gtm';

const meta = {
  title: 'noblog',
  description:
    'ライフハックとプログラミングのことをつぶやいてます。Notionで書いた内容が記事になっています。',
  url: 'https://www.nbr41.com/',
  image: '/site_image.jpg',
};

export default function App({ Component, pageProps }: AppProps) {
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
              url: meta.url,
              width: 800,
              height: 600,
              alt: 'Site Image',
              type: 'image/jpeg',
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

      <RecoilRoot>
        <NotificationsProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NotificationsProvider>
      </RecoilRoot>
    </>
  );
}
