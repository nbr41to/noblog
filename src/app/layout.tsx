import { baloo2, notoSansJP } from '@/styles/font';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${notoSansJP.variable} ${baloo2.variable}`}>
        {children}
      </body>
    </html>
  );
}
