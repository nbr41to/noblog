import { MantineProvider } from '@mantine/core';

import { Layout } from './Layout';
import { Spotlight } from './Spotlight';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider defaultColorScheme="light">
      <Spotlight />
      <Layout>{children}</Layout>
    </MantineProvider>
  );
};
