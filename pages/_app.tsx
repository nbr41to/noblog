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
