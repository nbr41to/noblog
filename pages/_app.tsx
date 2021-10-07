import '../styles/reset.css';
import '../styles/globals.css';

import type { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';
import usePageView from 'src/hooks/usePageView';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

import { Layout } from '../src/components/layout';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  usePageView();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="description"
          content="のまど先生の生存確認ブログ。Notion API と Next.js で作成。主にプログラミングと心理学に関する知見をアウトプットしています。"
          key="desc"
        />
        <meta
          property="og:description"
          content="のまど先生の生存確認ブログ。Notion API と Next.js で作成。主にプログラミングと心理学に関する知見をアウトプットしています。"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
