import { Noto_Sans_JP, Fira_Code, Baloo_2 } from 'next/font/google';

export const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  weight: ['400', '500', '700'],
  style: 'normal',
  subsets: ['latin'],
});

export const firaCode = Fira_Code({
  variable: '--font-fira-code',
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
});

export const baloo2 = Baloo_2({
  variable: '--font-baloo-2',
  weight: ['700'],
  style: 'normal',
  subsets: ['latin'],
});
