import type { AppProps } from 'next/app';

import { NotificationsProvider } from '@mantine/notifications';
import { DefaultSeo } from 'next-seo';
import { RecoilRoot } from 'recoil';

import { Layout } from '~/layouts/Layout';

import '~/styles/globals.css';

const meta = {
  title: 'noblog',
  description:
    '駆け出しエンジニアが本気で作った渾身の「Notion Blog 2023」。Notionで書いた内容が記事になっています。',
  url: 'https://www.nbr41.com/',
  image: 'https://www.nbr41.com//site_image.jpg',
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
