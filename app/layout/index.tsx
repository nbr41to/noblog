'use client';

import { Layout } from './Layout';
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
          <Layout>{children}</Layout>
        </SpotlightProvider>
      </body>
    </html>
  );
}
