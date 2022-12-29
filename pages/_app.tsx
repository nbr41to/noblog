import type { AppProps } from 'next/app';

import { NotificationsProvider } from '@mantine/notifications';

import { Layout } from '@/components/layout/Layout';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NotificationsProvider>
  );
}
