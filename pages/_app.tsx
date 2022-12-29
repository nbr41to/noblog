import type { SpotlightAction } from '@mantine/spotlight';
import type { AppProps } from 'next/app';

import { NotificationsProvider } from '@mantine/notifications';
import { SpotlightProvider } from '@mantine/spotlight';
import { FaSearch } from 'react-icons/fa';

import { Layout } from '@/components/layout/Layout';

import '@/styles/globals.css';

const actions: SpotlightAction[] = [
  {
    title: 'Home',
    description: 'Get to home page',
    onTrigger: () => console.log('Home'),
    icon: <FaSearch size={18} />,
  },
  {
    title: 'Dashboard',
    description: 'Get full information about current system status',
    onTrigger: () => console.log('Dashboard'),
    icon: <FaSearch size={18} />,
  },
  {
    title: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onTrigger: () => console.log('Documentation'),
    icon: <FaSearch size={18} />,
  },
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationsProvider>
      <SpotlightProvider
        actions={actions}
        searchIcon={<FaSearch size={18} />}
        searchPlaceholder='Search...'
        shortcut='mod + K'
        nothingFoundMessage='Nothing found...'
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SpotlightProvider>
    </NotificationsProvider>
  );
}
