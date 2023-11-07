'use client';

import { Layout } from './Layout';
import { Spotlight } from './Spotlight';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <Spotlight />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
