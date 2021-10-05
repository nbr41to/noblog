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
        <title>のぶろぐ。</title>
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
