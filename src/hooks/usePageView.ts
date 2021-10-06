import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from 'src/utils/gtag';

export default function usePageView() {
  const router = useRouter();
  useEffect(() => {
    if (!gtag.existsGaId) {
      return;
    }

    const handleRouteChange = (path, { shallow }) => {
      if (!shallow) gtag.pageview(path);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
}
