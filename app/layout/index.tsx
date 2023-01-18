'use client';

import { Layout } from './Layout';
import { NotificationsProvider } from './NotificationsProvider';
import { SpotlightProvider } from './SpotlightProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <SpotlightProvider>
          <NotificationsProvider>
            <Layout>{children}</Layout>
          </NotificationsProvider>
        </SpotlightProvider>
      </body>
    </html>
  );
}
