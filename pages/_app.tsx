import type { AppProps /*, AppContext */ } from 'next/app';
import { Layout } from '../src/components/layout';
import '../styles/reset.css';
import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import usePageView from 'src/hooks/usePageView';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  usePageView();

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
