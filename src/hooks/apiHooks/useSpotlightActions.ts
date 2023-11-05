import type { SpotlightActionData } from '@mantine/spotlight';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { searchAlgolia } from '~/utils/algolia';

/**
 * Algoliaの検索結果を取得し、Spotlightのactionsに変換して返す
 */
export const useSpotlightActions = (query: string) => {
  const router = useRouter();
  const [actions, setActions] = useState<SpotlightActionData[]>([]);

  useEffect(() => {
    if (!query) return setActions([]);

    const getResult = setTimeout(() => {
      (async () => {
        const hits = await searchAlgolia(query);
        const actions = hits.map((hit) => ({
          id: hit.objectID,
          title: hit.title,
          description: hit.category + ', ' + hit.tags.join(', '),
          onTrigger: () =>
            router.push({
              pathname: '/posts/[page_id]',
              query: { page_id: hit.objectID },
            }),
        }));

        setActions(actions);
      })();
    }, 500);

    return () => clearTimeout(getResult);
  }, [query, router]);

  return actions;
};
