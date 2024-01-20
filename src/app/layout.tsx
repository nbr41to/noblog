import '@/styles/globals.css';
import '@/styles/body-before.css';
import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';

import type { Metadata } from 'next';

import { ColorSchemeScript } from '@mantine/core';
import { clsx } from 'clsx';

import { baloo2, firaCode, notoSansJP } from '@/styles/fontFamilies';

import { AppLayout } from './layout/index';

export const metadata: Metadata = {
  title: 'noblog',
  description: 'Notionで作った本格Blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body
        // className={baloo2.variable}
        className={clsx([
          baloo2.variable,
          firaCode.variable,
          notoSansJP.variable,
        ])}
      >
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
