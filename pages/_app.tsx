import type { AppProps /*, AppContext */ } from 'next/app';
import { Layout } from '../src/components/layout';
import '../styles/reset.css';
import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
