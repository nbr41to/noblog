import type { AppProps } from "next/app";

import { NotificationsProvider } from "@mantine/notifications";
import { RecoilRoot } from "recoil";

import { Layout } from "~/layouts/Layout";

import "~/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <NotificationsProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NotificationsProvider>
    </RecoilRoot>
  );
}
