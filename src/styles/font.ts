import { Baloo_2, Noto_Sans_JP } from 'next/font/google';

export const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const baloo2 = Baloo_2({
  variable: '--font-baloo-2',
  weight: ['700'],
  subsets: ['latin'],
  display: 'swap',
});
