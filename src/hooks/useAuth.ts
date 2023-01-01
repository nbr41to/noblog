import type { Session } from 'next-auth';

import { getSession, getProviders } from 'next-auth/react';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [state, setState] = useState<{
    session: Session | null;
    provider: string;
    isLoading: boolean;
  }>({
    session: null,
    provider: '',
    isLoading: true,
  });

  useEffect(() => {
    (async () => {
      const session = await getSession();
      const providers = await getProviders();
      const keys = providers ? Object.keys(providers) : [];
      const providerName = keys.length > 0 ? keys[0] : '';

      setState({ session, provider: providerName, isLoading: false });
    })();
  }, []);

  return state;
};
